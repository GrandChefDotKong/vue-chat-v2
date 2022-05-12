import { ref } from "vue";
import { projectAuth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

const error = ref(null);

const signup = async (email, password, displayName) => {
    error.value = null;

    try {
        
        const res = await createUserWithEmailAndPassword(projectAuth, email, password);

        if(!res) {
            throw new Error('Couldn\'t complete the sign up :,(')
        }

        await updateProfile(res.user, { displayName });
        
        error.value = null;

        return res;

    } catch (err) {
        console.log(err.message);
        error.value = err.message
    }
    
}

const useSignup = () => {

    return { error, signup }
}

export default useSignup;