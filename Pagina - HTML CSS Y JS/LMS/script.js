document.querySelector('.menu-icon').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('open');

    // Alternar la visibilidad del botón cerrado
    document.querySelector('.close-button').style.display = navLinks.classList.contains('open') ? 'block' : 'none';
});

document.querySelector('.close-button').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.remove('open');
    document.querySelector('.close-button').style.display = 'none'; // Ocultar el botón de cerrar cuando se cierra el menú
});

// Opción: Cierra el menú si haces clic en cualquier lugar fuera del menú
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('nav-links');
    if (!navLinks.contains(event.target) && !document.querySelector('.menu-icon').contains(event.target) && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        document.querySelector('.close-button').style.display = 'none';
    }
});



document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Previene el envío del formulario

    // Obtiene los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    // Muestra una respuesta al usuario
    document.getElementById('formResponse').innerText = `Gracias ${nombre}, su formulario ha sido enviado. Nos pondremos en contacto a través del email: ${email}.`;

    // Limpia el formulario
    this.reset();
});


/* un ícono de búsqueda que, al hacer clic, mostrará un campo para buscar */
// Funcionalidad para mostrar/ocultar el campo de búsqueda
 const searchContainer = document.getElementById('search-container');
 const searchIcon = document.getElementById('search-icon');
 const searchInput = document.getElementById('search-input');

 searchIcon.addEventListener('click', () => {
     searchContainer.classList.toggle('active');
     if (searchContainer.classList.contains('active')) {
         searchInput.focus();
     } else {
         searchInput.value = ''; // Limpiar el input al cerrar
     }
 });


