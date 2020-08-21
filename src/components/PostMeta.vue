<template>
   <div class="post-meta">
      تاریخ ارسال {{ post.date | fa-date }}.
      <template v-if="post.timeToRead">
        <strong>زمان تقریبی مطالعه: {{ post.timeToRead }} دقیقه</strong>
      </template>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
.post-meta {
  font-size: .8em;
  opacity: .8;
}
</style>