<template>
    <svg aria-hidden="true">
        <use :xlink:href="svgName" :fill="props.color" />
    </svg>
</template>
<script setup>
    const props = defineProps({
        name: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: '#333'
        }
    })
    const svgName = computed(() => {
        return `#icon-${props.name}`
    })
</script>
<style lang="scss"></style>
