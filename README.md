# Repositorio proyecto React Shop con TailwindCSS

El proyecto fue creado mientras realizaba el curso de Plazti [Curso de React.js con Vite.js y TailwindCSS](https://platzi.com/reactjs).

Este repositorio contiene el código de un aplicación de una tienda online, una lista de productos para poder filtrar por título, categoría y poder añadirlos al carrito de compras, un historial de las compras realizadas y poder ver el detalles de los mismos. Poder registrarse y mantener una sessión activa.

- Desarrollada con React para manipulación del DOM y reactividad de la aplicación.
- Vite como empaquetador.
- TailwindCSS para los estilos.
- React Router DOM para el enrutado de la página y uso de condicionales para proteger las rutas.
- Uso de useContext 
    - Para tener acceso al estado del carrito, los filtros y los productos, en cualquier parte que se requiera en un conjunto de componentes que estén dentro del proveedor de dicho contexto evitando prop drilling.
    - Para tener acceso a la sessión del usuario y sus datos.
- Uso de customHooks para el uso del contexto del carrito y el usuario.
- LocalStorage para guardar los datos del usuario y saber si está en sessión.

Puedes ver el demo aquí: (https://rolando22.github.io/react-shop-tailwindcss/).
