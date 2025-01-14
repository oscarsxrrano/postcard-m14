<script setup>
import { useRoute } from "vue-router";
import llegirPost from "../composables/llegirPost.js";

const route = useRoute();
const { post, user, llegirPostID } = llegirPost();

llegirPostID(route.params.id);
</script>

<template>
  <div v-if="post && user" class="p-4">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>

  <div v-else class="loading">
    <p>Loading...</p>
  </div>
</template>

<style>
  .loading {
    cursor: wait;
  }
</style>