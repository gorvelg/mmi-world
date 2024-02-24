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
    population: {
        type : String,
        required: true
    },
    superficie: {
        type : String,
        required: true
    },
    continent: {
        type : String,
        required: true
    
    }
})
</script>
<template>
    <div class="card">
        <h1>{{ name }}</h1>
        <p>Capitale : {{ capitale }}</p>
        <p>Population : {{ population }}</p>
        <p>Superficie : {{ superficie }}</p>
        <p>Continent : {{ continent }}</p>
    </div>
</template>

<style scoped>
    .card {
        border: 1px solid #000;
        background-color: #fff;
        color: #242424;
        border-radius: 16px;
        padding: 16px;
        width: 100%;
        max-width: 600px;
    }
    .card h1 {
        text-align: center;
        margin: 0;
    }

             

         
  
</style>