<template>
  <form @submit.prevent="handleSubmit">
      <input v-model="email" type="email" required placeholder="email">
      <input v-model="password" type="password" required placeholder="password">
      <div class="error">{{ error }}</div>
      <button>Log in</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity';
import useLogin from '../composables/useLogin';

export default {

    setup(props, context) {

        const { error, login } = useLogin();
        const email = ref('');
        const password = ref('');

        const handleSubmit = async () => {
            const res = await login(email.value, password.value); 
            
            if(!error.value) {
                context.emit('login');
            }
        }

        return { email, password, handleSubmit, error }
    }
}
</script>

<style>

</style>