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

const obtenerMascota = async(req, res)=>{

	const mascotas = await Mascota.find({estado: true})
		.populate('usuario','nombre')

	res.json({mascotas})
}

const actualizarMascota = async(req, res)=>{

	const {id} = req.params;

    const {estado, usuario, ...resto} = req.body

    resto.nombre = resto.nombre.toUpperCase();
    resto.usuario = req.usuario._id;

    const mascota = await Mascota.findByIdAndUpdate(id, resto, {new: true})

    res.json({
        mascota
    })
}

const borrarMascota = async(req, res)=>{

	const {id} = req.params; 

    const mascota = await Mascota.findByIdAndUpdate(id, {estado:false})

    res.json({
        mascota
    });
}

module.exports = {
	crearMascota,
	obtenerMascota,
	actualizarMascota,
	borrarMascota
}