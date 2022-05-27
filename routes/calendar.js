const {Router} = require('express');
const {check} = require('express-validator');
const {  
    crearCita,
	obtenerCitas,
	obtenerCitasCard,
	calendarDelete,
	calendarPut,
	obtenerCitasUser
} = require('../controllers/calendar');
const {validarCampos} = require('../middlewares/validar-campos')
const {validarJWT} = require('../middlewares/validar-jwt')
// const {citaExiste} = require('../helpers/db-validator')
const router = Router();


router.get('/',obtenerCitas);
router.get('/car',obtenerCitasCard);
router.get('/user',[
	validarJWT
],obtenerCitasUser);

router.post('/',[
	validarJWT
],crearCita);

router.delete('/:id',[
	check('id','No es un ID valido').isMongoId(),
	validarJWT
],calendarDelete);

router.put('/:id',[
	check('id','No es un ID valido').isMongoId(),
	validarJWT
],calendarPut);




module.exports = router;