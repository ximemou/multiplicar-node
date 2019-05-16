const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en cosola la taba de multiplicar', opciones)
    .command('crear', 'Genera un archivo con la tabla multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
}