<template>
    <input @keyup="filtrer" type="text" v-model="recherche" placeholder="Rechercher">
    <div v-if="data">
        <div v-for="pays in data">
            <CardPays 
                :name="pays.name.common" 
                :continent="pays.continents[0]"
                :capitale="pays?.capital?.[0]" 
                :flag="pays.flags.svg"
                :alt="pays.flags.alt"
                :code="pays.cca3"
            />
        </div>
    </div>
    <div v-else>
        <p>Saisir un caractere</p>
    </div>
</template>
<script setup>
    import CardPays from '../components/CardPays.vue';
    import { onMounted, ref } from 'vue';

    const data = ref()
    const recherche = ref('')

    async function filtrer() {
        data.value = await fetch('https://restcountries.com/v3.1/name/' + recherche.value)
            .then(response => response.json())
            .then(data => {
                return data
            })
            console.log(data)
    }
</script>