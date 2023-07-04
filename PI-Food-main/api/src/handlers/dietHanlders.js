const { Diets } = require("../db");
const {fetchDietsFromAPI, getDietsDB, loadDietsDB, getDiets} = require("../controllers/dietsControllers");

// const getTotalDiets = async (req, res) =>{
//   try {
//     await loadDietsDB();
//     res.status(200).send("Dietas cargadas correctamente");
//   } catch (error) {
//     res.status(400).send("Error al cargar las dietas");
//   }
// }

const getDiet = async (req, res) =>{
  try {
    const diets = await getDiets();
    res.status(200).json(diets)
  } catch (error) {
    console.log(error);
    res.status(400).send("Error al obtener las dietas");
  }
  // try {
  //   const dietsDb = await getDietsDB();
  //   res.status(200).json(dietsDb);
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).send("hay un error")
  // } DE AQUI EN ADELANTE ES EL PRIMER INTENTO 
    // try {
    //     let diets = await Diets.findAll();// verifico si hay dietas en la DB
    //     if (diets.length === 0) {// si no hay dietas en la base de datos
    //         diets = await fetchDietsFromAPI();//obtenemos los tipos de dietas de la API
    //         await Diets.bulkCreate(diets);// Guardar las dietas en la base de datos
    //     }
    //     res.status(200).json(diets);
    //   } catch (error) {
    //     console.log(error)
    //     res.status(500).json({ error: "Error al obtener los tipos de dietas" })
    //   }
    // //res.status(200).send("estoy en diet")
};

module.exports = {
    getDiet,
   // getTotalDiets
}