document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("eventForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const evento = document.getElementById("evento").value.trim();

        if (!nombre || !telefono || !evento) {
            alert("Por favor, completa todos los campos obligatorios.");
            return;
        }

        if (!/^\d+$/.test(telefono)) {
            const tel = document.getElementById("telefono");
            tel.setAttribute("class", tel.getAttribute("class") + " error");
            alert("El teléfono solo puede contener números.");
            return;
        }

        alert("Formulario enviado correctamente.");
        form.submit();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Datos del menú (puedes agregar más si lo necesitas)
    const menuItems = [
      { name: "Inicio", link: "index.html" },
      { name: "Contacto", link: "contacto.html" },
      { name: "Conócenos", link: "conocenos.html" },
      { name: "Reseñas", link: "resenas.html" },
    ];
  
    // Seleccionamos el contenedor donde se creará el menú
    const navbar = document.getElementById("navbar");
  
    // Creamos la lista de elementos del menú
    const ul = document.createElement("ul");
  
    // Iteramos sobre los elementos del menú y creamos los enlaces
    menuItems.forEach(item => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.textContent = item.name;
      button.classList.add("btn-menu");
      button.onclick = function() {
        window.location.href = item.link;
      };
      li.appendChild(button);
      ul.appendChild(li);
    });
  
    // Añadimos la lista al contenedor del navbar
    navbar.appendChild(ul);
  });