import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useFavoritesStore } from '../stores/favorites'
import { useDrinksStore } from '../stores/drinks'

export const useModalStore = defineStore('modal', () => { 

    const favorites = useFavoritesStore()
    const drinks = useDrinksStore()

    const modal = ref(false)


    function handleClickModal() { 
        modal.value = !modal.value
    }

    const buttonText = computed(() => {
        return favorites.favoriteExist(drinks.recipe.idDrink) ? 'Delete Favorite' : 'Add Favorite'
    })

    return {
        modal,
        handleClickModal,
        buttonText
    }
})