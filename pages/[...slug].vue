<template>
    <h1 class="color-red">404 Not Found!!</h1>
    <p>Your slug info: {{ route.params.slug }}</p>
</template>
<script setup>
    let route = useRoute()
</script>
<style lang="scss"></style>
