<template>
    <h1>[course] C</h1>
    <p>{{ route.fullPath }}</p>
    <p>[course]：{{ route.params.course }}</p>
</template>
<script setup>
    let route = useRoute()
</script>
<style lang="scss"></style>
