<template>
    <nav>
        <ul>
            <li>
                <RouterLink to="/">Accueil</RouterLink>
            </li>
            <li>
                <RouterLink :to="{name: 'about'}">À propos</RouterLink>
            </li>
            <li>
                <RouterLink :to="{name: 'pays'}">Pays</RouterLink>
            </li>
        </ul>
    </nav>
</template>
<style scoped>
nav {
    display: flex;
    padding: 24px 48px;
    background-color: #2978A0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

nav ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
</style>