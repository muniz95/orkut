import React, { Component } from 'react'
import ProfileSidebar from "../components/ProfileSidebar";
import '../styles/Main.css'

export default class Main extends Component {
  render() {
    return (
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
              <b>Sorte de hoje:</b> Você é observador e analítico por natureza
            </p>
          </div>
          <div className="column is-3">
            <p className="round-box">Amigos (0)</p>
            <p className="round-box">Comunidades (0)</p>
          </div>
        </div>
      </ProfileSidebar>
    );
  }
}
