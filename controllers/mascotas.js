const Mascota = require('../models/mascota')

const crearMascota = async(req, res)=>{

	const {nombre,  usuario, ...body} = req.body


	//Generar data a guardar
	const data = {
		...body,
		nombre,
		usuario: req.usuario._id
	}

	const mascota = new Mascota(data);

	//guardar en BD
	await mascota.save();

	res.json(mascota);
}

const obtenerMascota = (req, res)=>{

	res.json({msg: 'get'})
}

const actualizarMascota = (req, res)=>{

	res.json({msg: 'put'})
}

const borrarMascota = (req, res)=>{

	res.json({msg: 'delete'})
}

module.exports = {
	crearMascota,
	obtenerMascota,
	actualizarMascota,
	borrarMascota
}