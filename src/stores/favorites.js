import { defineStore } from "pinia";

export const useFavoritesStore = defineStore('favorites', () => { 


    const handleFavorites = () => { 
        console.log('adding ....')
    }

    return {
        handleFavorites

    }
})