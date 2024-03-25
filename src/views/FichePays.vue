<script setup>
    import { useRoute } from 'vue-router' ;
    import { ref, onMounted } from 'vue' ;

    const route = useRoute() ;

    const paysNom = route.params.id

    const data = ref()

    onMounted(async ()=> {    
        data.value = await fetch(`https://restcountries.com/v3.1/alpha/${paysNom}`)
        .then(response => response.json())
        .then(data => {
            return data[0]
        })
    })

</script>
<template>

        <h1>Fiche Pays : {{ paysNom }}</h1>
        <div v-if="data">
            <img :src="data.flags.svg" :alt="data.flags.alt">
            <h2>Nom : {{ data.name.common }}</h2>
            <p>Capitale : {{ data.capital[0] }} </p>
            
            
               
        </div>
        <div v-else>
            <p>Chargement...</p>
        </div>



</template>