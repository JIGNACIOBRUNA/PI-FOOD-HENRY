const { Recipes, Diets } = require("../db");
const axios = require("axios");
const { API_URL, API_KEY } = process.env;



const getRecipeById = async (idRecipe, origin) => {
    const recipe = 
      origin === "API" 
         ? (await axios.get(`${API_URL}/${idRecipe}/information?apiKey=${API_KEY}&addRecipeInformation=true&number=100`))
           .data
         : await Recipes.findByPk(idRecipe);
    return recipe;
    
};   


const createRecipe = async ( name, image, summary, healthScore, stepByStep) => { 
    //create es un metodo de sequelize
    const newRecipe = await Recipes.create({ name, image, summary, healthScore, stepByStep})
   // await newRecipe.addDiets(diets);
    return newRecipe;

};


const getApiRecipes = async () =>{
    const { API_URL, API_KEY } = process.env;

    const recipeUrl = await axios.get(`${API_URL}/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100&offset=100`);
    const recipeApi = await recipeUrl.data.results.map(e =>{ // itero sobre cada receta obtenida de la API
        //genero stepByStep para contener los pasos de la receta y verifico que analyzedIns exista y sea un array. Con flatMap aplano las instrucciones en un solo array si no es cierto le asigno un array vacio a stepByStep
        const stepByStep = e.analyzedInstructions && Array.isArray(e.analyzedInstructions) ? e.analyzedInstructions.flatMap(i => i.stepByStep || []) : [];
        return{ // genero un objeto con las propiedades necesarias de cada receta 
            id: e.id,
            name: e.title,
            summary: e.summary,
            healthScore: e.healthScore,
            image: e.image,
            diets: e.diets,
            stepByStep: stepByStep.map(s => {
                return { //utilizo el map de stepByStep para convertir cada paso en el formato necesario 
                  number: s.number,
                  step: s.step
                };
              })
            }
        })
        return recipeApi
    }

const getDbRecipes = async () =>{
    return await Recipes.findAll({
        include: {
            model: Diets,
            attributtes: ['name'],
            through: {
                attributtes: []
            }
        }
    })
}

const getTotalRecipes = async () =>{
    const totalApi = await getApiRecipes();
    const totalDb = await getDbRecipes();
    const totalApiDb = totalApi.concat(totalDb);
    return totalApiDb
}



module.exports = {
    getRecipeById, 
    createRecipe,
    getTotalRecipes, 
    getApiRecipes
}