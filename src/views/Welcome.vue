<template>
<div class="welcome container">
  <p>Welcome</p> 
  <div v-if="!showLogin">
    <signup-form @signup="enterChat" />
    <p>Already an account ? <span @click="toggleShowLogin">Login</span> instead</p>
  </div>
  <div v-else>
    <login-form @login="enterChat" />
    <p>No account yet ? <span @click="toggleShowLogin">Signup</span> instead</p>
  </div>
</div>
  
</template>

<script>
import SignupForm from '../components/SignupForm.vue';
import LoginForm from '../components/LoginForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    components: { SignupForm, LoginForm },
    setup() {
        let showLogin = ref(true);
        const router = useRouter();

        const toggleShowLogin = () => {
            showLogin.value = !showLogin.value;
        }

        const enterChat = () => {
          router.push({ name: 'chatroom' });
        }

        return { showLogin, toggleShowLogin, enterChat }
    }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
    .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }

</style>