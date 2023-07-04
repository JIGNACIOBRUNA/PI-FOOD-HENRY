const { Diets, Recipes } = require("../db");
const axios = require('axios');
const { API_URL, API_KEY } = process.env; // Asegúrate de tener un archivo de configuración con las variables necesarias


const getDiets = async () => { // obtenemos las dietas 
  try {
    let dietsApi = [];
    let dietsDbAll = [];
    let diets = await Diets.findAll();
    let dietsDb = await Recipes.findAll({
      include: { // hacemos la asociacion 
        model: Diets, // la asociacion va con el modelo Diets
        attributes: ["id", "name"], //especificamos los atributos del modelo 
        through: { attributes: [] }, // indicamos el tipo de tabla intermedia
      },
    });

    dietsDbAll = dietsDb
      .flatMap((recipe) => // obtenemos un array plano de todas las dietas
        recipe.Diets.map((diet) => ({ id: diet.id, name: diet.name, db: true })) //generamos un nuevo array y creamos un objeto por cada dieta con id diet api
      )
      .filter(
        (diet, index, self) =>
          index ===
          self.findIndex((d) => d.id === diet.id && d.name === diet.name)
      );

    if (diets.length === 0) {
      const { data } = await axios.get(
        `${API_URL}/complexSearch?diets&apiKey=${API_KEY}&addRecipeInformation=true`
      );

      let idCounter = 0;
      dietsApi = [
        ...new Set(data.results.flatMap((diet) => diet.diets)),
      ].map((diet) => ({ id: idCounter++, diet, api: true }));

      diets = [...new Set(data.results.map((result) => result.diets).flat())];

      await Promise.all(
        diets.map(async (diet) => {
          await Diets.create({ name: diet });
        })
      );
      diets = await Diets.findAll();
    } else {
      const { data } = await axios.get(
        `${API_URL}/complexSearch?diets&apiKey=${API_KEY}&addRecipeInformation=true`
      );
      let idCounter = 0;
      dietsApi = [
        ...new Set(data.results.flatMap((diet) => diet.diets)),
      ].map((diet) => ({ id: idCounter++, diet, api: true }));
    }

    const combinedDiets = [...dietsApi, ...dietsDbAll];
    return combinedDiets;
  } catch (error) {
    throw new Error(error.message);
  }
};





// const loadDietsDB = async () =>{
//     const urlDiet = await axios.get(`${API_URL}/complexSearch?diets&apiKey=${API_KEY}`, {headers: { 'Accept-Encoding': 'identify'}} )
//     const diets = urlDiet.data.results.map(recipe => recipe.diets).flat();
//     const uniqueDiets = Array.from(new Set(diets));

//     await Promise.all(uniqueDiets.map(async diet =>{
//       await Diets.findOrCreate({
//         where: { name: diet }
//       });
//     }));
// };

// const getDietsDB = async () =>{
//   const dietsDb = await Diets.findAll();
//   return dietsDb;
// }


// const fetchDietsFromAPI = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/complexSearch?diets&apiKey=${API_KEY}&addRecipeInformation=true&number=100&offset=100`);
//     const diets = response.data;

//     return diets;
//   } catch (error) {
//     throw new Error('Error al obtener los tipos de dietas de la API');
//   }
// };

 module.exports = {
//   // loadDietsDB,
//   // getDietsDB, 
//   //fetchDietsFromAPI 
getDiets
 }