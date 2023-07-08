import { ALL_RECIPES, ADD_RECIPE, RECIPE_BY_ID, RECIPE_BY_NAME, ALL_DIETS, SEARCH_RECIPE, FILTER, ALPHABETICAL_SORT, LOCAL_HOST, DETAIL_RECIPE } from "./actionsTypes";

const intialState = { // al inicio de la app este es el estado global
    currentPage: 1,
    recipes: [],
    detail: [],
    recipesByName: [],
}

const rootReducer = (state = intialState, action) =>{
    switch(action.type){
        case ALL_RECIPES:
            return{ ...state, recipesByName: action.payload.recipesByName, recipes: action.payload.recipes };
        
        case DETAIL_RECIPE:
            return{ ...state, detail: action.payload.detail};
            
        case RECIPE_BY_NAME:
            return{...state, recipesByName: action.payload.recipesByName}    

        case 'CURRENT_PAGE':
            return {...state, currentPage: action.payload}    
              
        default:
            return{...state};

    }
};

export default rootReducer;