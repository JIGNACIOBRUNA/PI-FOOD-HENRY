//IMPORTAMOS MODELO Y LIBRERIAS NECESARIAS 
const express = require ("express"); // Libreria para crear ap y rutas
const { Router } = require ("express"); 
const { getRecipeHandler, getRecipeName, postRecipe, allRecipes, } = require("../handlers/recipeHandlers");
const router = Router(); // objeto de enrutamiento de de express para generar rutas. Router debe ser en mayuscyla sino no funciona 
const recipe = require ("../models/modelRecipe");//Modelo de base de datos para recetas
const axios = require ("axios");// libreria para realizar solicitudes HTTP


router.get("/", getRecipeName);

router.get("/:idRecipe", getRecipeHandler);

router.post("/", postRecipe);

module.exports = router;