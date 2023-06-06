const axios = require('axios');
const { API_URL, API_KEY } = process.env; // Asegúrate de tener un archivo de configuración con las variables necesarias

const fetchDietsFromAPI = async () => {
  try {
    const response = await axios.get(`${API_URL}/complexSearch?diets&apiKey=${API_KEY}`);
    const diets = response.data;

    return diets;
  } catch (error) {
    throw new Error('Error al obtener los tipos de dietas de la API');
  }
};

module.exports = {
    fetchDietsFromAPI
}