<template>
    <nav>
        <div>
            <p>Hey there</p>
            <p class="email">Currently log in as ...</p>
        </div>
        <div class="error">{{ error }}</div>
        <button @click="handleSignout">Logout</button>
    </nav>
</template>

<script>
import useSignout from "@/composables/useSignout";
import { useRouter } from "vue-router";

export default {

    setup() {
        const { error, signout } = useSignout();
        const router = useRouter();

        const handleSignout = async () => {
            await signout();

            if(!error.value) {
                router.push({ name: 'welcome' });
            }
        }

        return { error, handleSignout }
    }

}
</script>

<style>

</style>