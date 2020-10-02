var socket = io();

var searchParams = new URLSearchParams(window.location.search);
var label = $('small');

if(!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario')
}

let escritorio = searchParams.get('escritorio');

$('h1').text("Escritorio " + escritorio);

$('button').on('click', () => {
    socket.emit('atenderTicket', {
        escritorio
    }, function (res) {

        if(res === 'No hay tickets') {
            label.text(res)
            alert('No hay mas tickets');
            return;
        }  

        label.text("Ticket " + res.numero)
    });
})