import { useEffect, useState } from "react";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Main from "./Main/Main.jsx";
import "./index.css";
import { api } from "../Utils/Api.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  // console.log("currentUser en App.jsx:", currentUser);
  const [popup, setPopup] = useState(null);
  const [popupImage, setImagePopup] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Llamada correcta a api.getUserInfo()
    api
      .getUserInfo()
      .then((userData) => {
        console.log("Datos del usuario obtenidos:", userData);
        setCurrentUser(userData); // Actualiza el estado con los datos del usuario
      })
      .catch((err) => {
        console.error("Error al obtener la información del usuario:", err);
      });
  }, []); // El array vacío asegura que se ejecuta una sola vez al montar

  useEffect(() => {
    api
      .getInitialCards() // Llama al método de la instancia
      .then((fetchedCards) => {
        console.log("Tarjetas obtenidas:", fetchedCards);
        setCards(fetchedCards); // Actualiza el estado con los datos obtenidos
      })
      .catch((err) => {
        console.error("Error al obtener las tarjetas:", err); // Maneja errores
      });
  }, []); // Solo se ejecuta al montar el componente

  const handleAddPlaceSubmit = (newCardData) => {
    api
      .addNewCard(newCardData.name, newCardData.link) // Llama a la API para agregar la nueva tarjeta
      .then((newCard) => {
        setCards([newCard, ...cards]); // Actualiza el estado con la nueva tarjeta agregada
        handleClosePopup();
      })
      .catch((err) => {
        console.error("Error al agregar la tarjeta:", err);
      });
  };

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

  function handleUpdateAvatar(data) {
    api
      .updateUserAvatar(data.avatar) // Llama a la API con la nueva URL del avatar
      .then((newData) => {
        console.log("Avatar actualizado por la API:", newData);
        setCurrentUser(newData); // Actualiza el estado global con los datos recibidos
        handleClosePopup(); // Cierra el popup después de actualizar
      })
      .catch((err) => {
        console.error("Error al actualizar el avatar:", err);
      });
  }

  const handleCardLike = (card) => {
    const isLiked = card.isLiked; // Verifica si la tarjeta ya tiene like
    // console.log("Card data:", card);
    // console.log("Is liked:", isLiked);
    // Decide si llamar a likeCard o dislikeCard
    const apiCall = isLiked
      ? api.dislikeCard(card._id)
      : api.likeCard(card._id);

    apiCall
      .then((newCard) => {
        // console.log("Updated card from API:", newCard);
        // Actualiza el estado con la tarjeta actualizada
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((err) =>
        console.error("Error al cambiar el estado del like:", err)
      );
  };
  function handleCardDelete(card) {
    const cardId = card._id;
    api
      .deleteCard(cardId)
      .then(() => {
        setCards((prevCards) => prevCards.filter((c) => c._id !== cardId));
      })
      .catch((err) => {
        console.error("Error al obtener la información del usuario:", err);
      });
  }

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
    >
      <div className="page">
        <div className="overlay"></div>
        <Header />
        <Main
          cards={cards}
          onOpenPopup={handleOpenPopup} // Pasando la función para abrir popups
          onClosePopup={handleClosePopup} // Pasando la función para cerrar popups
          popup={popup} // Pasando el estado del popup
          onOpenImagePopup={handleOpenImagePopup} // Nueva prop para abrir imágenes
          popupImage={popupImage} // Estado del popup de imágenes
          handleUpdateAvatar={handleUpdateAvatar}
          handleUpdateUser={handleUpdateUser}
          handleCardLike={handleCardLike}
          handleCardDelete={handleCardDelete}
          handleAddPlaceSubmit={handleAddPlaceSubmit}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
