const { UUID, INTEGER } = require("sequelize");
const { v4: UUIDV4, validate } = require("uuid");
const { Recipes, Diets } = require("../db");
const { getRecipeById, createRecipe, getTotalRecipes, getApiRecipes } = require("../controllers/recipeControllers");


const allRecipes = async (req, res) =>{
    try {
        const recipes = await getApiRecipes();
        console.log(recipes);
        res.status(200).json(recipes)
      } catch (error) {
        console.log(error);
        res.status(400).send("Error al obtener las recetas");
}
}

const getRecipeName = async (req, res) =>{
    const{ name } = req.query;
    const recipeTotal = await getTotalRecipes();
    try {
        if(!name){
            res.status(400).send("Parametro incorrecto");
        }else{
            const recipeName = recipeTotal.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
            recipeName.length ? res.status(200).json(recipeName) : res.status(404).send("El nombre de la receta no existe")
        }
    } catch (error) {
        next(error)
    }
     
};

const getRecipeHandler = async(req, res) =>{
    const { idRecipe } = req.params;
    const origin = isNaN(idRecipe) ? "DB" : "API" // si no es numero su origen es Db por el uuid
    try {
        const recipe = await getRecipeById(idRecipe, origin);
        res.status(200).json(recipe);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "No se encontro la receta con el ID indicado" });
        
    }
};




const postRecipe = async (req, res) =>{
    try {
        const { name, image, summary, healthScore, stepByStep, diets } = req.body;
        const newRecipe = await createRecipe( name, image, summary, healthScore, stepByStep)
        
        //await associateDietsToRecipe(name, image, summary, healthScore, stepByStep);
        //console.log(newRecipe);
    //    const diets = await findDietsByName(diet);
    //    await newRecipe.addDiets(diets);
    const dietCreated = await Diets.findAll({
        where:{
            name: diets
        }
    })
    newRecipe.addDiet(dietCreated)
        res.status(200).json(newRecipe);
        console.log(newRecipe);
    } catch (error) {
        console.log(error)
        res.status(400).send("No se creo la nueva receta");
    }
    // try {
    //     const newRecipe = await Recipe.create({// creo la receta y la guardo en la DB
    //         id,
    //         name,
    //         image,
    //         summary,
    //         healthScore,
    //         setpByStep
    //     })
    //     const typeDiet = await Diet.findAll({ //utilizo el metodo findAll para buscar los tipos de dieta 
    //         where:{// los filtro por el array diet 
    //             name: diet 
    //         }
    //     })
    //     await newRecipe.addDiets(typeDiet);// con addDiet hago la relacion entre la receta creada y los tipos de dieta seleccionada 
    //     res.status(200).send("Receta creada correctamente")
    // } catch (error) {
    //     res.status(500).json({error: "No se creo la receta solictada"})
    // }
    // //res.status(200).send("estoy en post")
};

module.exports = {
    getRecipeHandler,
    getRecipeName,
    postRecipe,
    allRecipes
}