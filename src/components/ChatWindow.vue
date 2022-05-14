<template>
  <div class="chat-window">
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="docs" class="messages" ref="messages">
        <div v-for="doc in formatedDocs" :key="doc.id" class="single">
          <span class="created-at">{{ doc.createdAt }}</span>
          <span class="name">{{ doc.name }}</span>
          <span class="message">{{ doc.message }}</span>
        </div>
      </div>
  </div>
  
</template>

<script>
import getCollection from "../composables/getCollection";
import { formatDistanceToNow } from 'date-fns';
import { computed, onUpdated, ref } from '@vue/runtime-core';

export default {
    setup() {
        const { docs, error } = getCollection("messages");

        const formatedDocs = computed(() => {
            if(docs.value) {
                return docs.value.map((doc) => {
                    let time = formatDistanceToNow(doc.createdAt.toDate());
                    return { ...doc, createdAt: time }
                })
            }
        });

        const messages = ref(null);

        onUpdated(() => {
            messages.value.scrollTop = messages.value.scrollHeight;
        });
        

        return { error, docs, formatedDocs, messages }
    }
}
</script>

<style scoped>
  .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
</style>