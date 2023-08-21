// import "..Profile/Profile.css";
// import { React, useEffect, useContext, useState } from "react";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";

// function ProfileEdit({ }) {
//   return (
//     <form onSubmit={handleSubmit}>
//     <div className="profile__container">
//       <h3 className="profile__text profile__text_name">Имя</h3>
//       <input
//         type="text"
//         className="profile__text profile__text_name"
//         value={nickname}
//         onChange={handleNameChange}
//       />
//     </div>
//     <div className="profile__container">
//       <h3 className="profile__text profile__text_email">E-mail</h3>
//       <input
//         type="text"
//         className="profile__text profile__text_email"
//         value={email}
//         onChange={handleEmailChange}
//       />
//     </div>
//   <div className="profile__buttons">
//     <button className="profile__button" type="submit" value="edit">
//       Редактировать
//     </button>
//     <button className="profile__button" onClick={onExit}>
//       Выйти из аккаунта
//     </button>
//   </div>
//   </form>
//   )
// }

// export default ProfileEdit;