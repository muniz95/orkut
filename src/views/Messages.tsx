import React, { Component } from 'react'
import ProfileSidebar from "../components/ProfileSidebar";
import '../styles/Main.scss'

export default class Main extends Component {
  render() {
    return (
      <ProfileSidebar>
        <div className="columns">
          <div className="column is-9 my-info">
            <textarea className="textarea" placeholder="digite o texto ou cole HTML (HTML apenas para amigos)"></textarea>
            <div>
              <button className="button is-primary">Enviar</button>
              <button className="button is-secondary">Visualizar</button>
            </div>
            <div>&nbsp;</div>
            <div>
              <h1>Minha página de recados</h1>
            </div>
          </div>
        </div>
      </ProfileSidebar>
    );
  }
}
