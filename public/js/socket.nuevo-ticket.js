var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log('conectado al servidor')
});

socket.on('disconnect', () => {
    console.log('desconectado del servidor')
});

socket.on('estadoActual', (data) => {
    label.text(data.actual)
});

$('button').on('click', () => {
   socket.emit('siguienteTicket', null, function (res) {
        label.text(res);
   });
});