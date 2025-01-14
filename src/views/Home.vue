<script setup>
import llegirPost from "../composables/llegirPost";
import PostCard from "../components/PostCard.vue";

const {posts, llegirTots} = llegirPost();

llegirTots();
</script>

<template>
  <div class="flex flex-wrap flex-grow">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
