import { ref, onMounted, reactive, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import APIService from "../services/APIService";
import { useModalStore } from '../stores/modal'

export const useDrinksStore = defineStore('drinks', () => {

    const modal = useModalStore()

    const categories = ref([])

    const search = reactive({
        name: '',
        category: ''
    })

    const recipes = ref([])

    const recipe = ref({})

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
        //console.log(drinks)
        recipe.value = drinks[0] // first postion of the array

        modal.handleClickModal()
    }

    const noRecipes = computed(() => recipes.value.length === 0)

    return {
        categories,
        search,
        getRecipes,
        recipes,
        selectDrink,
        recipe,
        noRecipes
    }
})