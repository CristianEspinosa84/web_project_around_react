import { useEffect, useState } from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";
import "../src/Pages/index.css";
import { api } from "./Utils/Api.js";
import CurrentUserContext from "./contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    // Llamada correcta a api.getUserInfo()
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData); // Actualiza el estado con los datos del usuario
      })
      .catch((err) => {
        console.error("Error al obtener la información del usuario:", err);
      });
  }, []); // El array vacío asegura que se ejecuta una sola vez al montar

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="overlay"></div>
        <Header />
        <Main />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
