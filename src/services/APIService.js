import api from '../lib/axios'

export default {
    getCategories() { 
        return api.get('/list.php?c=list')
    },
    searchRecipes({ category, name}) {
        //console.log('Searching recipe')
        return api(`/filter.php?c=${category}&i=${name}`)
    },
    searchRecipe(id) {
        return api(`/lookup.php?i=${id}`)
    }

}

