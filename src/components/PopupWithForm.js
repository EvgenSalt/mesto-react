import React from "react";

function PopupWithForm({ isOpen, name, title, children, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${title} ${isOpen && 'popup_show'}`} >
      <div className="popup__container">
        <button aria-label="close" className={`popup__close popup__close_${name}`} type="button" onClick={onClose}></button>
        <form action="signin" method="post" name="card-form" className={`form form_${name}`} novalidate>
          <h3 className="form__title">
            {title}
          </h3>
          {children}
        </form>
      </div>
    </div >
  );
}

export default PopupWithForm;