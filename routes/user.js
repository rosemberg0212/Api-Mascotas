const {Router} = require('express');
const {check} = require('express-validator');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuarioGetById } = require('../controllers/user');
const {validarCampos} = require('../middlewares/validar-campos')
const {correoExiste, usuarioExiste} = require('../helpers/db-validator')
const router = Router();


router.get('/', usuariosGet);

router.get('/:id', usuarioGetById);

router.put('/:id',[
	check('id','No es un ID valido').isMongoId(),
	check('id').custom(usuarioExiste),
	validarCampos
],usuariosPut);

router.post('/',[
	check('nombre','El nombre es obligatorio').not().isEmpty(),
	check('password','El password debe ser mas de 6 letras').isLength({min: 6}),
	check('correo','El correo no es valido').isEmail(),
	check('correo').custom(correoExiste),
	// check('rol','El rol no es valido').isIn(['ADMIN_ROLE','USER_ROLE','JOB_ROLE']),
	validarCampos
],usuariosPost);

router.delete('/:id',[
	check('id','No es un ID valido').isMongoId(),
	check('id').custom(usuarioExiste),
	validarCampos
], usuariosDelete);



module.exports = router;