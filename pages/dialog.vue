<template>
    <Dialog />
    <button @click="openDialog">Open</button>
</template>
<script setup>
    //-- Imports
    let { open } = useDialog()

    //-- Functions
    let openDialog = function () {
        open({
            title: 'My Title',
            content: 'My Content',
            confirm: {
                btnName: '確定',
                onComplete: () => {
                    alert('Confirm')
                }
            },
            cancel: {
                btnName: '取消',
                onComplete: () => {
                    alert('Cancel')
                }
            }
        })
    }
</script>
<style lang="scss"></style>
