<template>
    <!-- A modal dialog containing a form -->
    <dialog id="dialog">
        <header>
            {{ dialogData.title }}
            <hr />
        </header>

        <p>{{ dialogData.content }}</p>

        <footer>
            <button @click="close('cancel')">{{ dialogData.cancel.btnName }}</button>
            <button @click="close('confirm')">{{ dialogData.confirm.btnName }}</button>
        </footer>
    </dialog>
</template>
<script setup>
    //-- Imports
    import { ref } from 'vue'

    //-- Params
    let { close } = useDialog()

    //-- Functions
</script>
<style lang="scss"></style>
