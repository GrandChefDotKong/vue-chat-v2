import { ref } from "vue";
import { projectAuth } from '../firebase/config';
import { signOut } from 'firebase/auth'

const error = ref(null);

const signout = async () => {
    error.value = null;

    await signOut(projectAuth).then(() => {
        error.value = null;
        console.log('successfully signed out');
    }).catch((err) => {
        console.log(err.message);
        error.value = 'Couldn\'t log out. Try again';
    });
}

const useSignout = () => {

    return { error, signout }
}

export default useSignout;