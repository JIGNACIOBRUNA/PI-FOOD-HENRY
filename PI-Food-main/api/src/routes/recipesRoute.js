const { Router } = require ("express"); 
const { allRecipes } = require("../handlers/recipeHandlers");
const router = Router();


router.get("/", allRecipes);

module.exports = router