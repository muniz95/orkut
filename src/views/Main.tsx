import React from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import "../styles/Main.scss";

const Main = () =>
  <ProfileSidebar>
    <div className="columns">
      <div className="column is-9">
        <div className="my-info">
          <h1>Bem vindo</h1>
          <p>
            <span>Recados&nbsp;</span>
            <span>Fotos&nbsp;</span>
            <span>Fãs&nbsp;</span>
            <span>Mensagens&nbsp;</span>
          </p>
          <p>
            <b>Visualizações de perfil:</b> Desde fev. 2016: 0, Semana passada: 0, Ontem: 0
          </p>
          <p>
            <b>Visitantes recentes:</b> Nenhum
          </p>
          <p>
            <b>Sorte de hoje:</b> Você é observador e analítico por natureza
          </p>
        </div>
        <div className="my-info">
          <h1>Bem vindo</h1>
          <p>
            <span>Recados&nbsp;</span>
            <span>Fotos&nbsp;</span>
            <span>Fãs&nbsp;</span>
            <span>Mensagens&nbsp;</span>
          </p>
          <p>
            <b>Visualizações de perfil:</b> Desde fev. 2016: 0, Semana passada: 0, Ontem: 0
          </p>
          <p>
            <b>Visitantes recentes:</b> Nenhum
          </p>
          <p>
            <b>Sorte de hoje:</b> Você é observador e analítico por natureza
          </p>
        </div>
      </div>
      <div className="column is-3">
        <p className="round-box">Amigos (0)</p>
        <p className="round-box">Comunidades (0)</p>
      </div>
    </div>
  </ProfileSidebar>;

export default Main
