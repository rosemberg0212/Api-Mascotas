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
		.populate('usuario','nombre') 

	res.send(calendar)
}

const obtenerCitasUser = async(req, res)=>{

	const calendar = await Calendar.find({usuario: req.usuario, estado: true})
		.populate('usuario','nombre') 

	res.json({
        calendar
    });
}

const calendarDelete = async (req, res)=>{  

    const {id} = req.params; 

    //borrar fisicamente
    const calendar = await Calendar.findByIdAndDelete(id);

    // const calendar = await Calendar.findByIdAndUpdate(id, {estado:false})

    res.json({
        calendar
    });
}

const calendarPut = async (req, res = response)=>{

    const {id} = req.params;
    const {_id, ...resto} = req.body


    const calendar = await Calendar.findByIdAndUpdate(id, resto)

    res.json({
        calendar
    });
}



module.exports = {
	obtenerCitas,
    crearCita,
	obtenerCitasCard,
	calendarDelete,
	calendarPut,
	obtenerCitasUser
}