# Alke Wallet

IMPORTANTE: Credenciales de Prueba
Para ingresar a la aplicación, utiliza los siguientes datos simulados:

Usuario (Email): pablo

Contraseña: 123456

**Alke Wallet** es una simulación de billetera virtual desarrollada como parte del bootcamp de desarrollo web. Este proyecto permite a los usuarios visualizar su saldo, realizar depósitos simulados, administrar una agenda de contactos y realizar transferencias.

El proyecto destaca por su diseño **Mobile-First** responsivo y el uso de **jQuery** para la manipulación dinámica del DOM.

## Tecnologías Utilizadas

* **HTML5:** Estructura semántica.
* **CSS3:** Variables CSS (`:root`), Media Queries y estilos personalizados.
* **Bootstrap 5.3:** Sistema de grillas, componentes (Modales, Cards, Navbar) y utilidades.
* **JavaScript (ES6):** Lógica de negocio (Login, cálculo de saldo).
* **jQuery:** Manejo de eventos, manipulación del DOM y animaciones en la sección de transferencias.

## Funcionalidades Principales

1.  **Inicio de Sesión:** Validación simple de credenciales para acceder al menú principal.
2.  **Visualización de Saldo:** El saldo se actualiza en tiempo real a través de las diferentes páginas.
3.  **Realizar Depósitos:** Interfaz para sumar fondos a la cuenta.
4.  **Enviar Dinero (Agenda y Transferencias):**
    * **Agregar Contactos:** Formulario funcional que agrega filas dinámicamente a la tabla de contactos.
    * **Buscador en tiempo real:** Filtra la lista de contactos mientras escribes (jQuery).
    * **Modal de Transferencia:** Selecciona un contacto, valida que tengas fondos suficientes y descuenta el monto del saldo total.
5.  **Diseño Responsivo:** Se adapta a pantallas de celular (vista tipo App) y aprovecha el espacio en pantallas de escritorio.

## Estructura del Proyecto

El proyecto sigue una organización limpia de archivos:

```text
/root
│
├── index.html          # Landing page (Bienvenida)
├── README.md           # Documentación
│
├── assets/
│   ├── css/
│   │   └── styles.css  # Estilos globales y customización
│   └── js/
│       └── script.js   # Lógica JS y jQuery unificada
│
└── pages/
    ├── login.html      # Formulario de acceso
    ├── menu.html       # Dashboard principal
    ├── deposit.html    # Pantalla de depósito
    ├── sendmoney.html  # Agenda y transferencias
    └── transactions.html # Historial de movimientos
