<script setup>
import CardPays from '@/components/CardPays.vue'
import { onMounted, ref } from 'vue';

let data = ref([])
const recherche = ref('')
let listeComplete = [] // Utilisez un tableau ordinaire pour stocker la liste complète des pays
const listeFiltree = ref([])

onMounted(async () => {    
    data.value = await fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        // Attribuez les données à votre liste complète
        listeComplete = data
        return data
    })
})

function filtrer() {
    // Utilisez listeComplete au lieu de listeComplete.value
    data.value = listeComplete.filter(pays => pays.name.common.toLowerCase().includes(recherche.value.toLowerCase()))   
}
</script>
<template>


  <input @keyup="filtrer" type="text" v-model="recherche" placeholder="Rechercher">
  <p>La recherche : {{ recherche }}</p>

  <div class="card-container">
    <div v-if="data">
      <div v-for="country in data">
        <CardPays 
          :name="country.name.common" 
          :continent="country.continents[0]"
          :capitale="country?.capital?.[0]" 
          :flag="country.flags.svg"
          :alt="country.flags.alt"
          :code="country.cca3"
        />
      </div>
    </div>
    <div v-else>
      <p>Chargement...</p>
    </div>
  </div>
</template>
<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}
</style>
