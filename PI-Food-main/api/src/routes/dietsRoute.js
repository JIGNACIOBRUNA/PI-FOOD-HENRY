const { Router } = require ("express"); 
const {getDiet} = require("../handlers/dietHanlders");
const router = Router();


router.get("/", getDiet);

module.exports = router;