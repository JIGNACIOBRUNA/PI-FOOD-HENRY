import axios from "axios";
import { ALL_RECIPES, DETAIL_RECIPE, ADD_RECIPE, RECIPE_BY_ID, RECIPE_BY_NAME, ALL_DIETS, SEARCH_RECIPE, FILTER, ALPHABETICAL_SORT, LOCAL_HOST } from "./actionsTypes";

export const allRecipes = () =>{
    return async function(dispatch){
        const apiData = await axios.get(`${LOCAL_HOST}/recipes/`);
        const recipes = apiData.data;
        return dispatch({ type: ALL_RECIPES, payload: {recipes}})
    };
};

export const detailRecipe = (idRecipe) =>{
    return async function(dispatch){
        const apiData = await axios.get(`${LOCAL_HOST}/recipe/${idRecipe}`);
        const detail = apiData.data;
        return dispatch({ type: DETAIL_RECIPE, payload: {detail}})

    }
}

export const getRecipeName = (nameRecipe) =>{
    return async function(dispatch){
        const apiData = await axios.get(`${LOCAL_HOST}/recipe/?name=${nameRecipe}`)
        const name = apiData.data;
        return dispatch({type: RECIPE_BY_NAME, payload: {name}})
    }
}

export const changeCurrentPage = payload => {
    return dispatch => {
        dispatch({ type: 'CURRENT_PAGE', payload})
    }
};

export default allRecipes