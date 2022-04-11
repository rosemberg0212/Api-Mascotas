const {Router} = require('express');
const {check} = require('express-validator');
const {  
    crearCita,
	obtenerCitas,
	actualizarCitas,
	borrarCitas
} = require('../controllers/citas');
const {validarCampos} = require('../middlewares/validar-campos')
const {validarJWT} = require('../middlewares/validar-jwt')
const {citaExiste} = require('../helpers/db-validator')
const router = Router();


router.get('/',obtenerCitas);

router.post('/',[
	validarJWT,
	check('servicio','El servicio es obligatorio').not().isEmpty(),
	// check('fecha','La fecha es obligatoria').not().isEmpty(),
	validarCampos
],crearCita);

router.put('/:id',[
	validarJWT,
	check('servicio','El servicio es obligatorio').not().isEmpty(),
	check('id','No es un ID valido').isMongoId(),
	check('id').custom(citaExiste),
	validarCampos
],actualizarCitas);

router.delete('/:id',[
	validarJWT,
	check('id','No es un ID valido').isMongoId(),
	check('id').custom(citaExiste),
	validarCampos
],borrarCitas);

module.exports = router;