import { defineStore } from "pinia";
import { useDrinksStore } from "./drinks";
import { ref, watch, onMounted } from "vue";

export const useFavoritesStore = defineStore('favorites', () => { 

    const drinks = useDrinksStore()

    const favorites = ref([])

    watch(favorites, () => {
        synchronizeLocalStorage()
    }, {
        deep: true
    })

    const synchronizeLocalStorage = () => {
        localStorage.setItem('favorites',JSON.stringify(favorites.value))
     }

    const handleFavorites = () => { 
        //console.log('adding ....'+drinks.recipe.strDrink)
        favorites.value.push(drinks.recipe)
    }

    return {
        handleFavorites,
        favorites

    }
})