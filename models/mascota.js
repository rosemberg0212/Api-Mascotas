const {Schema, model} = require('mongoose')

const MascotaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    tipo: {
        type: String,
        required: [true, 'El tipo es obligatorio']
    },
    genero: {
        type: String,
        required: [true, 'El genero es obligatorio']
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    ubicacion: {
        type: String,
        required: [true, 'La ubicacion es obligatoria']
    },
    img: {
        type: String
    },
    estado: {
        type: Boolean,
        default: true
    },
    contacto: {
        type: String,
        required: [true, 'El contacto es obligatoria']
    }
});

//sacar la version y la contraseña
MascotaSchema.methods.toJSON = function() {
    const {__v, ...mascota} = this.toObject();
    return mascota;
}

module.exports = model('Mascota', MascotaSchema);