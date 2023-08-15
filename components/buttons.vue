<template>

    <button class="main-btn" v-bind="$attrs">
    <slot/>
  </button>
  <div>
    <h2 class="name">
    <slot name="title" />
    </h2>

  </div>
</template>

<script setup>

</script>

<style>

</style>