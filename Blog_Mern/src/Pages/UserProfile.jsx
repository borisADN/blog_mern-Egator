import React, { useState } from "react";
import { Link } from "react-router-dom";
import defaultAvatar from "../assets/Images/nath_react.jpg";
import { FaCheck, FaEdit } from "react-icons/fa";

const UserProfile = () => {
  const [avatar, setAvatar] = useState(defaultAvatar);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmNewPassword, setconfirmNewPassword] = useState("");
  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={`/myposts/euzez`} className="btn">
          My Posts
        </Link>
        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={avatar} alt="" />
            </div>
            <form action="" className="avatar__form">
              <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={e => setAvatar(e.target.files[0])}
                accept="png,jpg,jpeg"
              />
              <label htmlFor="avatar">
                <FaEdit />
              </label>
            </form>
            <button className="profile__avatar-btn">
              <FaCheck />
            </button>
          </div>
          <h1>Lionel Messi</h1>
          <form className="form profile__form">
            <p className="form__error_message">
              This is an error message
            </p>
            <input type="text" placeholder="Name" name="name" value={name} onChange={e => setName(e.target.value)}/>
            <input type="email" placeholder="Email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="current Password" name="currentPassword" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)}/>
            <input type="password" placeholder="new Password" name="newPassword" value={newPassword} onChange={e => setnewPassword(e.target.value)}/>
            <input type="password" placeholder="Confirm New Password" name="newPassword" value={confirmNewPassword} onChange={e => setconfirmNewPassword(e.target.value)}/>

            <button className="btn primary">Update Details</button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
