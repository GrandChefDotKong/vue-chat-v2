import { ref, watch } from 'vue';
import { projectFirestore } from '../firebase/config';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';

const getCollection = (collectionName) => {

    const docs = ref([]);
    const error = ref(null);

    const collectionRef = collection(projectFirestore, collectionName); 
    const q = query(collectionRef, orderBy('createdAt'));

    const unsub = onSnapshot(q,(snap) => {
        let results = [];
        snap.docs.forEach((doc) => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
        })

        docs.value = results;
        error.value = null;

    }, (err) => {
        console.log(err.message);
        error.value = 'Coul not fetch data from the server :/';
        docs.value = null;
    });

    watch((onInvalidate) => {
        onInvalidate(() => unsub())
    })

  return { docs, error };
}

export default getCollection;