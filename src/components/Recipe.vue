<script setup>
    import { useDrinksStore } from '../stores/drinks'

    const drinks = useDrinksStore()

    defineProps({
        recipe: {
            type: Object
        }
    })
</script>

<template>
    <div class="border shadow">
        <div class="overflow-hidden">
            <img
                :src="recipe.strDrinkThumb"
                alt="'image '+ recipe.strDrink"
                class="hover:scale-125 transition-transform hover:rotate-2"
            >
        </div>
        <div class="p-5">
            <h2 class="text-2xl truncate font-extrabold">{{ recipe.strDrink }}</h2>
            <button
                class="bg-orange-400  hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg"
                @click="drinks.selectDrink(recipe.idDrink)"
            >
                Recipe
            </button>
        </div>
    </div>

</template>