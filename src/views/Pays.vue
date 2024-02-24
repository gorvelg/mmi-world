<script setup>
    import CardPays from '@/components/CardPays.vue'
    const countries = ([
        {id: 1, nom: 'France', capitale: 'Paris', population: '67 000 000', superficie: '640 679', continent: 'Europe'},
        {id: 2, nom: 'Italie', capitale: 'Rome', population: '60 000 000', superficie: '301 338', continent: 'Europe'},
        {id: 3, nom: 'Espagne', capitale: 'Madrid', population: '47 000 000', superficie: '505 990', continent: 'Europe'},
        {id: 4, nom: 'Allemagne', capitale: 'Berlin', population: '83 000 000', superficie: '357 386', continent: 'Europe'},
        {id: 5, nom: 'Royaume-Uni', capitale: 'Londres', population: '66 000 000', superficie: '242 495', continent: 'Europe'},
        {id: 6, nom: 'Portugal', capitale: 'Lisbonne', population: '10 000 000', superficie: '92 090', continent: 'Europe'},
        {id: 7, nom: 'Pays-Bas', capitale: 'Amsterdam', population: '17 000 000', superficie: '41 543', continent: 'Europe'},
        {id: 8, nom: 'Belgique', capitale: 'Bruxelles', population: '11 000 000', superficie: '30 528', continent: 'Europe'}, 
        {id: 9, nom: 'Suisse', capitale: 'Berne', population: '8 000 000', superficie: '41 290', continent: 'Europe'},
        {id: 10, nom: 'Autriche', capitale: 'Vienne', population: '9 000 000', superficie: '83 879', continent: 'Europe'},
    ])


</script>
<template>
    <h1>Pays</h1>
    <p>Voici la liste des pays :</p>
    <ul>
        <li v-for="country in countries" :key="country.id">
            <RouterLink :to="{name: 'fichePays', params: {id: country.id}}">{{ country.nom }}</RouterLink>
        </li>
    </ul>
    <!-- <CardPays v-for="country in countries" :key="country.id" :name="country.nom" :capitale="country.capitale" /> -->
    <div>
        <h2>Les 3 premiers pays :</h2>
        <div class="country-box">
           <CardPays v-for="country in countries.slice(0, 3)" :key="country.id" :name="country.nom" :capitale="country.capitale" :population="country.population" :superficie="country.superficie" :continent="country.continent" /> 
        </div>
       
    </div>
    


</template>