<script setup>
    import { useFavoritesStore } from '../stores/favorites';
    import Recipe from '../components/Recipe.vue';

    const favorites = useFavoritesStore()
</script>
<template>
    <h1 class="text-6xl font-extrabold"> Favorites</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-10 gap-10 my-10">
        <Recipe
            v-for=" recipe in favorites.favorites"
            :recipe="recipe"
            :key="recipe.idDrink"
        />
    </div>
</template>