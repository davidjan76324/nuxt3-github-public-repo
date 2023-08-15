<template>
    <h1>Your choose is {{ route.fullPath }}!</h1>
    <div class="mb-4">
        <NuxtLink :to="`/course/${route.params.course}/a`" class="mr-4">{{ route.params.course }}/a</NuxtLink>
        <NuxtLink :to="`/course/${route.params.course}/b`" class="mr-4">{{ route.params.course }}/b</NuxtLink>
        <NuxtLink :to="`/course/${route.params.course}/c`" class="mr-4">{{ route.params.course }}/c</NuxtLink>
    </div>
    <div>
        <NuxtPage />
    </div>
</template>
<script setup>
    //-- Imports
    import { ref } from 'vue'

    //-- Params
    let route = useRoute()
    //-- Functions
</script>
<style lang="scss"></style>
