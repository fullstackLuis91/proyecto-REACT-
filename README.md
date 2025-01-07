# Motos Rioja - Plataforma de E-commerce de Motocicletas

Este proyecto es una aplicación web full-stack para la venta de motocicletas, combinando un **frontend basado en React** con un **backend en Node.js utilizando Sequelize ORM** para la gestión de la base de datos. El objetivo es ofrecer una interfaz amigable para que los clientes puedan explorar y comprar motocicletas.

## Funcionalidades

- **Frontend**: Construido con React y Ant Design para una interfaz moderna y responsive.
- **Backend**: Potenciado por Node.js y Sequelize para una gestión robusta y escalable de la base de datos.
- **Autenticación**: Los usuarios pueden registrarse, iniciar sesión y ver su perfil.
- **Carrito de Compras**: Los clientes pueden agregar motocicletas al carrito y realizar pedidos.
- **Gestión de Pedidos**: Los pedidos se crean y almacenan en la base de datos con los detalles de las motocicletas seleccionadas.
- **Gestión de Estado**: Se utiliza Context API para gestionar el estado de usuarios y productos.
- **Rutas**: Se emplea React Router para una navegación fluida entre páginas.

---

## Estructura del Proyecto

### Frontend

El frontend está desarrollado con **React** y estructurado de la siguiente manera:

- **Componentes**: Elementos de UI reutilizables como `Header`, `Cart`, `Profile`, etc.
- **Páginas**:
  - **Home**: Muestra una página de inicio con imágenes atractivas de motocicletas.
  - **Products**: Lista de motocicletas disponibles con opción de agregar al carrito.
  - **Register**: Formulario de registro de usuarios.
  - **Login**: Formulario de autenticación de usuarios.
  - **Cart**: Muestra los productos agregados al carrito y permite realizar pedidos.
  - **Profile**: Muestra la información del usuario obtenida del backend.
- **Context**:
  - **UserContext**: Gestiona la autenticación de usuarios y datos del perfil.
  - **ProductContext**: Gestiona los datos de productos, el carrito de compras y las operaciones de pedidos.
- **Servicios**: Se utiliza Axios para interactuar con el backend y realizar operaciones como crear pedidos y gestionar datos de usuarios.

#### Principales Librerías Utilizadas:

- **React**: Framework para el frontend.
- **Ant Design**: Para componentes de UI y estilos.
- **Axios**: Para solicitudes HTTP.
- **React Router**: Para la navegación.
- **Context API**: Para la gestión de estado.

---

### Backend

El backend, desarrollado previamente, utiliza **Node.js**, **Express** y **Sequelize** para gestionar una base de datos PostgreSQL.

#### Funcionalidades:

- **Autenticación**: Autenticación basada en tokens utilizando JWT.
- **Gestión de Productos**: Endpoints para obtener detalles de las motocicletas.
- **Gestión de Pedidos**: Endpoints para crear pedidos y asociarlos a usuarios.
- **Base de Datos**: Sequelize ORM para gestionar modelos y relaciones.

---

## Cómo Funciona

### 1. Flujo de Usuario

1. **Registro/Inicio de Sesión**:
   - Los usuarios pueden crear una cuenta o iniciar sesión en una existente.
   - Los tokens de autenticación se almacenan en `localStorage` para gestionar la sesión.
2. **Explorar Productos**:
   - Los usuarios pueden ver una lista de motocicletas disponibles con precios.
   - Al hacer clic en "Buy Bike", el producto se agrega al carrito.
3. **Carrito de Compras**:
   - Los usuarios pueden ver los productos en el carrito, vaciarlo o realizar un pedido.
   - Los pedidos incluyen los productos seleccionados y sus IDs, que se envían al backend.
4. **Creación de Pedidos**:
   - Al realizar un pedido, el frontend envía una solicitud POST con los IDs de los productos y el costo total.
   - El backend procesa el pedido y lo almacena en la base de datos utilizando Sequelize.

### 2. Integración con el Backend

- Los endpoints de la API del backend gestionan la autenticación, la obtención de productos y la creación de pedidos.
- El **OrderService** en el frontend envía los IDs de los productos y el costo total al backend en el siguiente formato:
  ```json
  {
    "ProductId": [4, 5],
    "total": 1200
  }

Tecnologías Utilizadas
Frontend:
React: Librería para el desarrollo de interfaces.
Ant Design: Para componentes de UI.
Axios: Para realizar solicitudes HTTP.
React Router: Para la navegación.
Backend:
Node.js: Entorno de ejecución.
Express: Framework para el desarrollo de APIs.
Sequelize: ORM para PostgreSQL.
JWT: Para autenticación.
