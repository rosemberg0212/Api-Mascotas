const Calendar = require('../models/Calendar')
const moment = require('moment')

const crearCita= async(req, res)=>{

	const {usuario, ...body} = req.body


	//Generar data a guardar
	const data = {
		...body,
		usuario: req.usuario._id
	}

	const calendar = new Calendar(data);

	//guardar en BD
	await calendar.save();

	res.json(calendar);
}

const obtenerCitas = async(req, res)=>{

	const calendar = await Calendar.find({start: {$gte: moment(req.query.start).toDate()}})
		// .populate('usuario','nombre')

	res.send(calendar)
}

const obtenerCitasCard = async(req, res)=>{

	const calendar = await Calendar.find()
		// .populate('usuario','nombre')

	res.send(calendar)
}



module.exports = {
	obtenerCitas,
    crearCita,
	obtenerCitasCard
}