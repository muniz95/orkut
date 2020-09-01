import React from 'react'
import ProfileSidebar from "../components/ProfileSidebar";
import '../styles/Main.scss'

const Profile = () =>
  <ProfileSidebar>
    <div className="columns">
      <div className="column is-9 my-info">
        <h1>Bem vindo</h1>
        <p>
          <span>Recados&nbsp;</span>
          <span>Fotos&nbsp;</span>
          <span>Fãs&nbsp;</span>
        </p>
        <p>
          <span>0</span>
          <span>0</span>
          <span>0</span>
        </p>
        <div className="tabs">
          <ul>
            <li className="is-active">Social</li>
          </ul>
        </div>
        <div className="tab-details">
          <p>Quem sou eu:</p>
        </div>
      </div>
      <div className="column is-3">
        <p className="round-box">Amigos (0)</p>
        <p className="round-box">Comunidades (0)</p>
      </div>
    </div>
  </ProfileSidebar>;

export default Profile
