const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipesRoute = require("./recipesRoute");
const recipeRoute = require("./recipeRoute"); // requerimos las rutas relacionadas a recetas
const dietsRoutes = require("./dietsRoute"); // requerimos la ruta relacionada a dietas

const router = Router();
// 
router.use("/recipes", recipesRoute);
router.use("/recipe", recipeRoute);// todas las rutas /recipe seran controladas por recipeRouter
router.use("/diets", dietsRoutes);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
   