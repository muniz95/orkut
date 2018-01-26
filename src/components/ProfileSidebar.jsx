import React from 'react'

export default function ProfileSidebar(props) {
  return (
    <section className="main-content columns is-fullheight">
      <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
        <p className="menu-label is-hidden-touch">Navigation</p>
        <ul className="menu-list">
          <li>
            <a href="/" className="">Editar perfil</a>
          </li>
          <li>
            {/* <a href="/" className="is-active">
              <span className="icon">
                <i className="fa fa-table" />
              </span> Links
            </a> */}

            <ul>
              <li>
                <a href="/">Perfil</a>
              </li>
              <li>
                <a href="/">Recados</a>
              </li>
              <li>
                <a href="/">Fotos</a>
              </li>
              <li>
                <a href="/">Vídeos</a>
              </li>
              <li>
                <a href="/">Depoimentos</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/" className="">Gerenciar trecos</a>
          </li>
          <li>
            <a href="/" className="">Listas</a>
          </li>
          <li>
            <a href="/" className="">Mensagens</a>
          </li>
          <li>
            <a href="/" className="">Atualizações</a>
          </li>
          <li>
            <a href="/" className="">Configurações</a>
          </li>
        </ul>
      </aside>

      <div className="container column is-10">
        <div className="section">
          {props.children}
        </div>
      </div>
    </section>
  )
}