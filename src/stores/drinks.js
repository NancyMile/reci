import { ref, onMounted, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import APIService from "../services/APIService";

export const useDrinksStore = defineStore('drinks', () => { 
    const categories = ref([])

    const search = reactive({
        name: '',
        category: ''
    })

    const recipes = ref([])

    onMounted( async () => {
        const { data: { drinks} } = await APIService.getCategories()
        //console.log(drinks)
        categories.value = drinks
    })

    async function getRecipes() {
        //console.log('Quering API')
        const { data: { drinks} } = await APIService.searchRecipes(search)
        //console.log(drinks)
        recipes.value = drinks
    }

    async function selectDrink(id) {
        //console.log('selecting drink',id)
        const { data: { drinks } } = await APIService.searchRecipe(id)
        console.log(drinks)
    }

    return {
        categories,
        search,
        getRecipes,
        recipes,
        selectDrink
    }
})