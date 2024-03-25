<script setup>
import FichePays from '../views/FichePays.vue';


const props = defineProps({
    name: {
        type : String,
        required: true
    },
    capitale: {
        type : String,
        required: true
    },
    flag: {
        type : String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
    continent: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
   
})
</script>
<template>
    <div class="card">
        <div class="card__infos">
            <h2>{{ name }}</h2>
        <p v-if="capitale" >Capitale : {{ capitale }}</p>
        <p>Continent : {{ continent }}</p>
        <router-link :to="{name: 'fichePays', params: {id: code} }">Voir plus</router-link>
        </div>
        <div class="card__img">
            <img :src="flag" :alt="alt">
        </div>
        
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
        display: flex;
        justify-content: space-between;
        gap: 16px;
    }

    .card__infos{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .card__infos h2 {
        text-align: center;
        margin: 0;
    }

    .card__img {
        width: 250px;
        height: 150px;
    }
    .card__img img {
        width: 100%;
        height: 100%;
    }
             

         
  
</style>