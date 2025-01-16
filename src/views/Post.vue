<script setup>
import { useRoute } from "vue-router";
import llegirPost from "../composables/llegirPost.js";

const route = useRoute();
const { post, user, llegirPostID } = llegirPost();

llegirPostID(route.params.id);
</script>

<template>
  <div v-if="post && user" class="p-4">
    <h1 class="text-3xl font-bold">{{ post.title }}</h1>
    <div class="text-gray-500 mb-4">by {{ user.name }}</div>
    <p>{{ post.body }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
