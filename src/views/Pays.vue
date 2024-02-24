<script setup>
    import CardPays from '@/components/CardPays.vue'
    const countries = ([
        {id: 1, nom: 'France', capitale: 'Paris'},
        {id: 2, nom: 'Italie', capitale: 'Rome'},
        {id: 3, nom: 'Espagne', capitale: 'Madrid'},
        {id: 4, nom: 'Allemagne', capitale: 'Berlin'},
        {id: 5, nom: 'Royaume-Uni', capitale: 'Londres'},
        {id: 6, nom: 'Portugal', capitale: 'Lisbonne'},
        {id: 7, nom: 'Pays-Bas', capitale: 'Amsterdam'},
        {id: 8, nom: 'Belgique', capitale: 'Bruxelles'}, 
        {id: 9, nom: 'Suisse', capitale: 'Berne'},
        {id: 10, nom: 'Autriche', capitale: 'Vienne'}
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

    <CardPays v-for="country in countries.slice(0, 3)" :key="country.id" :name="country.nom" :capitale="country.capitale" />
</template>