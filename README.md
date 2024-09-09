
# Juego de Dieces en React :

Este es un proyecto de una aplicación de juego de dados desarrollada con React. El objetivo del juego es tirar los dados hasta que todos tengan el mismo valor. Puedes hacer clic en cada dado para "congelar" su número entre tiradas.

## Características

- **Interfaz de Usuario Dinámica:** La interfaz responde a las interacciones del usuario y muestra confeti cuando se gana el juego.
- **Persistencia de Estado:** El estado del juego se guarda en `localStorage`, por lo que el progreso se mantiene incluso si se recarga la página.
- **Efectos de Sonido:** Sonidos personalizados para diferentes interacciones, como tirar los dados o celebrar una victoria.
- **Uso de Librerías Modernas:** Se utilizan librerías populares de React para manejar la lógica del juego, los efectos de sonido y las animaciones de confeti.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tuusuario/dice-game-react-app.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd dice-game-react-app
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:3000`.

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- [React](https://reactjs.org/) - ^18.3.1
- [React Confetti](https://www.npmjs.com/package/react-confetti) - ^6.1.0
- [React DOM](https://reactjs.org/docs/react-dom.html) - ^18.3.1
- [use-sound](https://www.npmjs.com/package/use-sound) - ^4.0.3

## Dependencias de Desarrollo

- [ESLint](https://eslint.org/) - ^9.9.0
- [Vite](https://vitejs.dev/) - ^5.4.1
- [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react) - ^4.3.1
- [@types/react](https://www.npmjs.com/package/@types/react) - ^18.3.3
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) - ^18.3.0
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) - ^7.35.0
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) - ^5.1.0-rc.0
- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh) - ^0.4.9
- [globals](https://www.npmjs.com/package/globals) - ^15.9.0

## Uso

- **Tirar Dados:** Haz clic en el botón "¡Tirar Dados!" para lanzar los dados. 
- **Congelar un Dado:** Haz clic en cualquier dado para congelar su valor y evitar que cambie en la siguiente tirada.
- **Nuevo Juego:** Si ganas, se mostrará un botón para empezar un nuevo juego.

## Contribución

Si deseas contribuir al proyecto, puedes hacer un fork del repositorio, crear una nueva rama con tus mejoras y luego enviar un pull request.

## Licencia

Este proyecto está licenciado bajo la [MIT License](https://opensource.org/licenses/MIT).
```
