<script setup>
    import { useRoute } from 'vue-router'
    const route = useRoute()

    const countries = route.params.id

</script>
<template>
    <h1>
        Fiche Pays n°{{ route.params.id }}

    </h1>


</template>