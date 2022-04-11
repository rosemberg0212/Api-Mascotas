const {Schema, model} = require('mongoose')

const CitaSchema = Schema({
    servicio: {
        type: String,
        required: [true, 'El servicio es obligatorio']
    },
    ubicacion: {
        type: String
    },
    fecha: {
        type: String,
        required: [true, 'La fecha es obligatoria']
    },
    comentarios: {
        type: String,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    }
});


module.exports = model('Cita', CitaSchema);