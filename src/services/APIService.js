import api from '../lib/axios'

export default {
    getCategories() { 
        return api.get('/list.php?c=list')
    },
    searchRecipe({ category, name}) {
        //console.log('Searching recipe')
        return api(`/filter.php?c=${category}&i=${name}`)
    }
}

