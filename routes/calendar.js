const {Router} = require('express');
const {check} = require('express-validator');
const {  
    crearCita,
	obtenerCitas,
	obtenerCitasCard
	// actualizarCitas,
	// borrarCitas
} = require('../controllers/calendar');
const {validarCampos} = require('../middlewares/validar-campos')
const {validarJWT} = require('../middlewares/validar-jwt')
// const {citaExiste} = require('../helpers/db-validator')
const router = Router();


router.get('/',obtenerCitas);
router.get('/car',obtenerCitasCard);

obtenerCitasCard

router.post('/',[
	validarJWT
],crearCita);


module.exports = router;