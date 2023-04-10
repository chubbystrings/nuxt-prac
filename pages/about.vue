<template>
    <div>
        <p>About</p>
        <p>{{ data }}</p>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>

</style>