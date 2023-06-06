const { Diets } = require("../db");
const {fetchDietsFromAPI} = require("../controllers/dietsControllers");

const getDiet = async (req, res) =>{
    try {
        let diets = await Diets.findAll();// verifico si hay dietas en la DB
        if (diets.length === 0) {// si no hay dietas en la base de datos
            diets = await fetchDietsFromAPI();//obtenemos los tipos de dietas de la API
            await Diets.bulkCreate(diets);// Guardar las dietas en la base de datos
        }
        res.status(200).json(diets);
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Error al obtener los tipos de dietas" })
      }
    //res.status(200).send("estoy en diet")
};

module.exports = {
    getDiet
}