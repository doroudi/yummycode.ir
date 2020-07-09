<template>
  <div>
    <h2 v-html="post.title" />
    <div v-html="post.excerpt" />
    <g-link :to="post.path" class="more">بیشتر بخوانید</g-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.more {
  display: inline-block;
  padding: 0.6rem 0.9rem;
  border: solid 1px;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #26d5ec;
}
</style>