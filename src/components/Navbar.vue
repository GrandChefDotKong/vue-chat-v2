<template>
    <nav v-if="user">
        <div>
            <p>Hey there, {{ user.displayName }}</p>
            <p class="email">Currently log in as {{ user.email }}</p>
        </div>
        <div class="error">{{ error }}</div>
        <button @click="handleSignout">Logout</button>
    </nav>
</template>

<script>
import useSignout from "@/composables/useSignout";
import { useRouter } from "vue-router";
import getUser from '../composables/getUser';

export default {

    setup() {
        const { error, signout } = useSignout();
        const router = useRouter();
        const { user } = getUser();


        const handleSignout = async () => {
            await signout();

            if(!error.value) {
                router.push({ name: 'welcome' });
            }
        }

        return { error, handleSignout, user }
    }

}
</script>

<style>

</style>