const { Recipes, Diet } = require("../db");
const axios = require("axios");
const { API_URL, API_KEY } = process.env;

const getRecipeById = async (idRecipe, origin) => {
    const recipe = 
      origin === "API" 
         ? (await axios.get(`${API_URL}/${idRecipe}/information?apiKey=${API_KEY}&addRecipeInformation=true&number=100`))
           .data
         : await Recipes.findByPk(idRecipe);
    return recipe;
    
}   

const createRecipe = async (id, name, image, summary, healthScore, stepByStep) => { 
    //create es un metodo de sequelize
    const newRecipe = await Recipes.create({id, name, image, summary, healthScore, stepByStep})
    return newRecipe;
};

module.exports = {
    getRecipeById, 
    createRecipe
}