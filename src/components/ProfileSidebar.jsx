import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ProfileSidebar.scss'

export default function ProfileSidebar(props) {
  return (
    <section className="main-content columns is-fullheight">
      <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
        <p className="menu-label is-hidden-touch">FOTO</p>
        <p className="menu-label is-hidden-touch">EU</p>
        <ul className="menu-list">
          <li>
            <Link to="/" className="">Editar perfil</Link>
          </li>
          <li>
            <Link to="/profile">Perfil</Link>
          </li>
          <li>
            <Link to="/messages">Recados</Link>
          </li>
          <li>
            <Link to="/">Fotos</Link>
          </li>
          <li>
            <Link to="/">Vídeos</Link>
          </li>
          <li>
            <Link to="/">Depoimentos</Link>
          </li>
          {/* <Link to="/" className="is-activeLink>
            <span className="icon">
              <i className="fa fa-table" />
            </span> Links
          </a> */}
          <hr />
          <li>
            <Link to="/" className="">Gerenciar trecos</Link>
          </li>
          <li>
            <Link to="/" className="">Listas</Link>
          </li>
          <li>
            <Link to="/" className="">Mensagens</Link>
          </li>
          <li>
            <Link to="/" className="">Atualizações</Link>
          </li>
          <li>
            <Link to="/" className="">Configurações</Link>
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