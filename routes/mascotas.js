const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos')
const {validarJWT} = require('../middlewares/validar-jwt')
const router = Router();

const {obtenerMascota,
	crearMascota,
	actualizarMascota, 
	borrarMascota
} = require('../controllers/mascotas')

router.get('/',obtenerMascota);

router.post('/',[
	validarJWT,
	check('nombre','El nombre es obligatorio').not().isEmpty(),
	check('tipo','El tipo es obligatorio').not().isEmpty(),
	check('genero','El genero es obligatorio').not().isEmpty(),
	check('ubicacion','la ubicacion es obligatoria').not().isEmpty(),
	check('contacto','El contacto es obligatorio').not().isEmpty(),
	validarCampos
],crearMascota);

router.put('/:id',actualizarMascota);

router.delete('/:id',borrarMascota);

module.exports = router;