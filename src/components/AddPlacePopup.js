import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({
  isOpen,
  onClose,
  onAddPlace
}) {

  const [imgName, setImgName] = useState('');
  const [imgLink, setImgLink] = useState('');

  function handleImgName(event) {
    setImgName(event.target.value)
  }

  function handleImgLink(event) {
    setImgLink(event.target.value)
  }

  useEffect(() => {
    setImgName('')
    setImgLink('')
  }, [isOpen])

  function handleSubmit(event) {
    event.preventDefault();
    onAddPlace({
      name: imgName,
      link: imgLink
    })
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      name={'add'}
      title={'Новое место'}
      children={
        <>
          <input type="text" name="name_img" placeholder="Название" className="form__input form__input_text_name-img" defaultValue=""
            required minLength="2" maxLength="30" id="name-img" onChange={handleImgName} />
          <span className="form__msg" id="name-img-error">error</span>
          <input type="url" name="link_img" placeholder="Ссылка на картинку" className="form__input form__input_text_src-img"
            defaultValue="" required id="link-img" onChange={handleImgLink} />
          <span className="form__msg" id="link-img-error">error</span>
        </>}
      btnText={'Создать'}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  )
}
export default AddPlacePopup;