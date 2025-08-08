# 🌴 Extra Tour

**Extra Tour** es una aplicación web para la gestión de clientes, tours y reservaciones en una agencia de viajes.  
Este proyecto fue desarrollado como parte de la materia **Bases de Datos para la Computación en la Nube** en la carrera **TSU en Tecnologías de la Información Área Desarrollo de Software Multiplataforma**.

---

## 🚀 Características

- **Autenticación de usuarios**: registro e inicio de sesión seguro
- **Gestión de clientes**: CRUD completo para registros de clientes
- **Gestión de tours**: CRUD con descripción, precio, duración y fechas disponibles
- **Gestión de reservaciones**: CRUD para reservas vinculadas a clientes y tours, con control de fecha, personas y estado

---

## 🛠️ Tecnologías utilizadas

**Frontend**
- React.js
- Material UI (MUI)
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB con Mongoose

**Herramientas**
- MongoDB Compass
- Postman
- Git & GitHub

---

## 📂 Estructura del proyecto


extra/
├── backend/        # API con Node.js, Express y Mongoose
├── frontend/       # Aplicación en React.js con MUI
├── .gitignore
└── README.md


---

## ⚙️ Instalación y ejecución

### 1. Clonar el repositorio

git clone https://github.com/DavidFraga09/extra-tour/
cd extra-tour


### 2. Instalar dependencias

**Backend**

cd backend
npm install


**Frontend**

cd ../frontend
npm install

### 3. Configurar variables de entorno

Crear un archivo `.env` dentro de `backend/`:


MONGODB_URI=tu_cadena_de_conexion_mongodb
PORT=5000
JWT_SECRET=tu_clave_secreta


### 4. Ejecutar el backend

cd backend
npm run dev

### 5. Ejecutar el frontend

Abrir otra terminal:

cd frontend
npm start


---

## 📝 Uso

1. Accede a `http://localhost:3000` para usar la aplicación
2. Regístrate o inicia sesión con tu cuenta
3. Gestiona clientes, tours y reservaciones desde el dashboard


---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

---

## 👨‍💻 Autor

**David Fraga** (https://github.com/DavidFraga09/))

Proyecto Link: (https://github.com/DavidFraga09/extra-tour/)
