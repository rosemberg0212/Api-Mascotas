const Role = require('../models/rol')
const {Usuario, Mascota} = require('../models/index')

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

const mascotaExiste = async (id)=>{
    const mascotaEx = await Mascota.findById(id)
    if(!mascotaEx){
        throw new Error(`El id ${id} no existe`)
    }
}

module.exports = {
	correoExiste,
	usuarioExiste,
    mascotaExiste
}