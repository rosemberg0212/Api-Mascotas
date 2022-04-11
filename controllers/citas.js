const Cita = require('../models/cita')

const crearCita= async(req, res)=>{

	const {usuario, ...body} = req.body


	//Generar data a guardar
	const data = {
		...body,
		usuario: req.usuario._id
	}

	const cita = new Cita(data);

	//guardar en BD
	await cita.save();

	res.json(cita);
}

const obtenerCitas = async(req, res)=>{

	const citas = await Cita.find({estado: true})
		.populate('usuario','nombre')

	res.json({citas})
}

const actualizarCitas = async(req, res)=>{

	const {id} = req.params;

    const {estado, usuario, ...resto} = req.body

    resto.usuario = req.usuario._id;

    const cita = await Cita.findByIdAndUpdate(id, resto, {new: true})

    res.json({
        cita
    })
}

const borrarCitas = async(req, res)=>{

	const {id} = req.params; 

    const cita = await Cita.findByIdAndUpdate(id, {estado:false})

    res.json({
        cita
    });
}

module.exports = {
	crearCita,
	obtenerCitas,
	actualizarCitas,
	borrarCitas
}