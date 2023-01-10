import image from '../images/image.jpg';

function ImagePopup() {
  return (
    <div className="popup popup_show-img">
      <div className="popup__container">
        <button aria-label="close" className="popup__close popup__close_show-img" type="button"></button>
        <div className="popup__card">
          <img src={image} alt="Фото" className="popup__img" />
          <h3 className="popup__text">
            Карачаево-Черкессия
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;