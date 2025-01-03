import { useEffect, useState } from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";
import "../src/Pages/index.css";
import { api } from "./Utils/Api.js";
import CurrentUserContext from "./contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  // console.log("currentUser en App.jsx:", currentUser);
  const [popup, setPopup] = useState(null);
  const [popupImage, setImagePopup] = useState(null);

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
        handleClosePopup();
      })

      .catch((err) => {
        console.error("Error al actualizar los datos del usuario:", err);
      });
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
    setImagePopup(null);
  }

  function handleOpenImagePopup(imageData) {
    setImagePopup(imageData); // Actualiza el estado con los datos de la imagen
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
      <div className="page">
        <div className="overlay"></div>
        <Header />
        <Main
          onOpenPopup={handleOpenPopup} // Pasando la función para abrir popups
          onClosePopup={handleClosePopup} // Pasando la función para cerrar popups
          popup={popup} // Pasando el estado del popup
          onOpenImagePopup={handleOpenImagePopup} // Nueva prop para abrir imágenes
          popupImage={popupImage} // Estado del popup de imágenes
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
