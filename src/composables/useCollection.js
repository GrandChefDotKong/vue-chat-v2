import { ref } from "vue";
import { setDoc, doc, collection } from "firebase/firestore";
import { projectFirestore } from '../firebase/config';

const useCollection = (collectionName) => {

    const error = ref(null);

    const addDoc = async (docData) => {
      error.value = null;

      try {

        const docRef = doc(collection(projectFirestore, collectionName));
        await setDoc(docRef, docData);

      } catch (err) {
        console.log(err.message);
        error.value = "Couldn't send the message";
      }
    }

    return { addDoc, error };
}

export default useCollection;