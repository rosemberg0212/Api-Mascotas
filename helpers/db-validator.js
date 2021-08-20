const Role = require('../models/rol')
const Usuario = require('../models/usuario')

//Verificar si el correo existe
const correoExiste = async (correo = '')=>{
	const emailExiste = await Usuario.findOne({correo})
    if(emailExiste){
        throw new Error(`El correo ${correo} ya existe`)
    }
}

const usuarioExiste = async (id)=>{
	const usuExiste = await Usuario.findById(id)
    if(!usuExiste){
        throw new Error(`El id ${id} no existe`)
    }
}

module.exports = {
	correoExiste,
	usuarioExiste
}