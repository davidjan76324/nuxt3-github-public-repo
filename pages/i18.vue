<template>
    <div>
        <select v-model="locale">
            <option value="zh-TW">zh-TW</option>
            <option value="en-US">en-US</option>
        </select>
    </div>
    <h1>{{ $t('front_page') }}</h1>
    <h1>{{ $t('about_us') }}</h1>
    <h1>{{ $t('contact_us') }}</h1>
    <h1>{{ $t('product_description') }}</h1>
    <h1>{{ $t('latest_news') }}</h1>
    <h1>{{ $t('history') }}</h1>
    <!-- 使用 v-html 方式 -->
    <div v-html="$t('about_us_detail')"></div>
</template>
<script setup>
    const { locale, setLocaleCookie } = useI18n()
    console.log(locale)

    watch(locale, function (newValue, oldValue) {
        setLocaleCookie(newValue)
    })
</script>
<style lang="scss"></style>
