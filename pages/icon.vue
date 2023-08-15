<template>
    <div>
        <SvgIcon name="ballonCelebration" color="red" class="w-50" />
    </div>
    <div>
        <ul v-for="item in vsweb">
            <li>{{ item.strText }}：{{ item.strValue }}</li>
        </ul>
    </div>
</template>
<script setup>
    let vsweb = ref({})
    onMounted(async function (params) {
        let res = await $fetch('/VsWeb/api/GetLstDicCinema')
        vsweb.value = res
        console.log(res)
    })
</script>
<style lang="scss"></style>
