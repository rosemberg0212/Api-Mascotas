const {Schema, model} = require('mongoose')

const Calendarchema = Schema({
    
    start: {
        type: Date
    },
    end: {
        type: Date
    },
    title:{
        type: String
    },
    estado: {
        type: Boolean,
        default: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    moment: {
        type: String,
        default: 'pendiente'
    }
});


module.exports = model('Calendar', Calendarchema);