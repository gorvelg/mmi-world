<script setup>

const props = defineProps({
    name: {
        type : String,
        required: true
    },
    capitale: {
        type : String,
        required: true
    },
})
</script>
<template>
    <div class="card">
        <h1>{{ name }}</h1>
        <p>Capitale : {{ capitale }}</p>
    </div>
</template>

<style scoped>
    .card {
        border: 1px solid #000;
        padding: 10px;
        margin: 10px;
        width: 200px;
    }
    h1 {
        font-size: 20px;
    }
    p {
        font-size: 16px;
    }
</style>