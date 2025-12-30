let saldo = 250000; 
let nombreUsuario = "Pablo";

function login() {
    const email = document.getElementById("usuarioingresado").value;
    const password = document.getElementById("contraseñaingresada").value;

    if (email === "pablo" && password === "123456") {
        // Redirige correctamente si estás dentro de la carpeta 'pages'
        window.location.href = "menu.html"; 
    } else {
        alert("Usuario o contraseña incorrectos. PRUEBA CON USUARIO: pablo - CONTRASEÑA: 123456");
    }
}

function cargarDatos() {
    const elementoSaldo = document.getElementById("saldoActual");
    const elementoNombre = document.getElementById("nombreUsuario");

    if (elementoNombre) {
        elementoNombre.innerText = nombreUsuario;
    }
    if (elementoSaldo) {
        elementoSaldo.innerText = saldo.toLocaleString('es-CL');
    }
}

function realizarDeposito() {
    const montoInput = document.getElementById("montoDeposito").value;
    const monto = parseInt(montoInput);

    if (monto > 0) {
        saldo = saldo + monto;
        cargarDatos(); // Actualiza el texto en pantalla
        alert(`¡Depósito realizado! Nuevo saldo: $${saldo}`);
        document.getElementById("montoDeposito").value = "";
    } else {
        alert("Por favor, ingresa un monto válido.");
    }
}

$(document).ready(function() {


    const contactosBase = [
        { nombre: "Ana Pérez", banco: "Banco Estado", cuenta: "123123" },
        { nombre: "Carlos Diaz", banco: "Santander", cuenta: "999888" },
        { nombre: "Maria Lopez", banco: "Banco Chile", cuenta: "777666" }
    ];

    // Función para dibujar una fila en la tabla
    function agregarFilaTabla(nombre, banco, cuenta) {
        let filaHTML = `
            <tr>
                <td class="fw-bold btn-primary ">${nombre}</td>
                <td class="small text-muted">${banco} - ${cuenta}</td>
                <td>
                    <button class="btn btn-sm btn-outline-primary rounded-pill btn-transferir"
                            data-nombre="${nombre}">
                        Transferir
                    </button>
                </td>
            </tr>
        `;
        // fadeIn 
        $(filaHTML).hide().appendTo('#tabla-contactos tbody').fadeIn(500);
    }

    // Inicializamos la tabla con los datos base (Solo si estamos en la página correcta)
    if ($('#tabla-contactos').length > 0) {
        contactosBase.forEach(c => agregarFilaTabla(c.nombre, c.banco, c.cuenta));
    }


    // nuevo contacto en formulario
    $('#form-agregar-contacto').submit(function(event) {
        event.preventDefault(); 

        let nombre = $('#nombre-contacto').val();
        let banco = $('#banco-contacto').val();
        let cuenta = $('#cuenta-contacto').val();

      
        agregarFilaTabla(nombre, banco, cuenta);

        // Limpiamos los inputs
        $('#form-agregar-contacto')[0].reset();
        alert("Contacto agregado exitosamente");
    });


    // transferir dinamicamente
    let destinatarioActual = "";

    $(document).on('click', '.btn-transferir', function() {
        destinatarioActual = $(this).data('nombre');
        
        $('#nombre-destinatario').text(destinatarioActual);
        
        $('#monto-transferencia').val('');
        $('#mensaje-error').text('');

        // Modal
        $('#modalTransferencia').modal('show');
    });


    // resta de saldo confirma transferencia
    $('#btn-confirmar').click(function() {
        let monto = parseInt($('#monto-transferencia').val());

        if (!monto || monto <= 0) {
            $('#mensaje-error').text("Ingresa un monto válido.");
            return;
        }
        if (monto > saldo) {
            $('#mensaje-error').text("No tienes saldo suficiente.");
            return;
        }

        saldo = saldo - monto;
        
        cargarDatos();

        $('#modalTransferencia').modal('hide');
        alert(`Has transferido $${monto} a ${destinatarioActual}. Saldo restante: $${saldo}`);
    });


    // buscador con autocompleta 
    $('#input-buscador').on('keyup', function() {
        let textoEscrito = $(this).val().toLowerCase();

 // filtrar
        $("#tabla-contactos tbody tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(textoEscrito) > -1);
        });
    });

});