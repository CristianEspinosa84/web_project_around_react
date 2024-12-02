# React + Vite

# Web Project Around React

Este proyecto fue desarrollado por **Cristian Espinosa** utilizando React y Vite. Es un proyecto inicial que implementa funcionalidades modernas como Hot Module Replacement (HMR) y configuraciones con ESLint, además de trabajar con componentes reutilizables y eventos manejados con hooks.

---

## Descripción del Proyecto

El proyecto **Web Project Around React** fue construido como una introducción al desarrollo modular y dinámico con React. Incluye características como:

- Componentización de formularios y ventanas emergentes (popups).
- Manejo de imágenes dinámicas y formularios.
- Uso de hooks como `useState` para manejar el estado de la aplicación.
- Integración de reglas ESLint para mantener un código limpio y estructurado.
- Utilización de datos ficticios para simular una integración de tarjetas.

El proyecto también incorpora el uso de eventos `onClick` para abrir y cerrar ventanas emergentes y gestionar la interacción del usuario con las tarjetas.

---

## Tecnologías Utilizadas

- **React**: Biblioteca principal para la creación de interfaces.
- **Vite**: Herramienta para desarrollo rápido con soporte para HMR.
- **JavaScript (ES6+)**: Lógica del proyecto.
- **CSS**: Estilos personalizados para los componentes.
- **ESLint**: Herramienta para análisis estático del código.
- **React Hooks**: Para el manejo de estados y ciclos de vida de los componentes.

---

## Funcionalidades Principales

1. **Tarjetas Interactivas:**

   - Cada tarjeta tiene un nombre, una imagen y botones para dar "like" o eliminarla.
   - Al hacer clic en la imagen, se abre una ventana emergente con una vista ampliada de la misma.

2. **Ventanas Emergentes (Popups):**

   - **Formulario "Nuevo Lugar"**: Permite agregar nuevas tarjetas.
   - **Formulario "Editar Perfil"**: Actualiza la información del usuario.
   - **Formulario "Editar Avatar"**: Cambia la imagen de perfil.
   - **Popup de Imagen**: Muestra una imagen en pantalla completa con su título.

3. **Gestión de Estado:**

   - Uso de `useState` para manejar el estado de los popups y las tarjetas.

4. **Reglas de ESLint Personalizadas:**
   - Configuración para garantizar un código consistente y evitar errores comunes en React.

---

## Estructura del Proyecto

```plaintext
src/
├── components/
│   ├── Card/
│   │   ├── Card.jsx
│   │   ├── Card.css
│   ├── Popup/
│   │   ├── Popup.jsx
│   │   ├── Popup.css
│   ├── ImagePopup/
│   │   ├── ImagePopup.jsx
│   │   ├── ImagePopup.css
│   ├── NewCard/
│   │   ├── NewCard.jsx
│   │   ├── NewCard.css
│   ├── EditProfile/
│   │   ├── EditProfile.jsx
│   │   ├── EditProfile.css
│   ├── EditAvatar/
│   │   ├── EditAvatar.jsx
│   │   ├── EditAvatar.css
├── App.jsx
├── main.jsx
├── index.css
```
