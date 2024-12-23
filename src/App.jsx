import { useEffect, useState } from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";
import "../src/Pages/index.css";
import { api } from "./Utils/Api.js";
import CurrentUserContext from "./contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  console.log("currentUser en App.jsx:", currentUser);

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

  const handleUpdateUser = (data) => {
    api
      .updateUserProfile(data.name, data.about) // Llama a la API con los datos correctos
      .then((newData) => {
        setCurrentUser(newData); // Actualiza el estado con los datos recibidos
      })
      .catch((err) => {
        console.error("Error al actualizar los datos del usuario:", err);
      });
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
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
