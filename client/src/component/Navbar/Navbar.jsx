// import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { userLogout } from '../redux/actions/userAC';


export default function Navbar() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()




  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">ToDo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <Link className="nav-link active" aria-current="page" to="/addTodo">Добавить задачу</Link>
            {!user ?
              <><li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signin">Войти</Link></li></> : <li className="nav-item"><button className="btn btn-light" onClick={() => dispatch(userLogout())} aria-current="page" >Выйти</button></li>}
          </ul>
        </div>
      </div>
    </nav>
  )
}

