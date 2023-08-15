<template>
    <h1>Your page is：{{ route.params.id }}</h1>
</template>
<script setup>
    let route = useRoute()
</script>
<style lang="scss"></style>
