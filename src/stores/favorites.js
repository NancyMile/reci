import { defineStore } from "pinia";
import { useDrinksStore } from "./drinks";
import { useModalStore } from "./modal";
import { ref, watch, onMounted } from "vue";

export const useFavoritesStore = defineStore('favorites', () => { 

    const drinks = useDrinksStore()
    const modal = useModalStore()

    const favorites = ref([])

    onMounted(() => {
        favorites.value = JSON.parse(localStorage.getItem('favorites')) ?? []
    })

    watch(favorites, () => {
        synchronizeLocalStorage()
    }, {
        deep: true
    })

    const synchronizeLocalStorage = () => {
        localStorage.setItem('favorites',JSON.stringify(favorites.value))
     }


    const favoriteExist = (id) => {
        const favoritesLocalStorage = JSON.parse(localStorage.getItem('favorites')) ?? []
        return favoritesLocalStorage.some(favorite =>favorite.idDrink === id)
    }

    const deleteFavorite = () => {
        favorites.value = favorites.value.filter(favorite => favorite.idDrink !== drinks.recipe.idDrink)
    }

    const handleFavorites = () => {
        if (favoriteExist(drinks.recipe.idDrink)) {
            //console.log('... already a favorite')
            deleteFavorite()
        } else {
            //console.log('adding ....'+drinks.recipe.strDrink)
            favorites.value.push(drinks.recipe)
        }
        modal.modal = false
    }


    return {
        handleFavorites,
        favorites,
        favoriteExist

    }
})