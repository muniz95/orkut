import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-9">
          <h2>Bem vindo</h2>
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
        <div className="column is-3">
          <p>Amigos (0)</p>
          <p>Comunidades (0)</p>
        </div>
      </div>
    );
  }
}
