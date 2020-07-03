import React from 'react'
import styles from './app.module.css'
import { NavLink, Route } from "react-router-dom"
import UsersContainer from "./dndUsers/UI/UsersContainer"
import WarGamingContainer from "./wargaming/UI/WarGamingContainer"
import PacManContainer from "./pacman/PacManContainer"
import CalcContainer from "./calc/UI/CalcContainer"



function App() {
    return (
        <div>
            <div className={styles.navbar}>
                <NavLink to={'/dndusers'}>DnDUsers</NavLink>
                <NavLink to={'/wargaming'}>WarGaming</NavLink>
                <NavLink to={'/pacman'}>PacMan</NavLink>
                {/* <NavLink  to={'/calc'}>Calculator</NavLink> */}
            </div>
            <Route path={'/dndusers'} render={() => <UsersContainer />} />
            <Route path={'/wargaming'} render={() => <WarGamingContainer />} />
            <Route path={'/pacman'} render={() => <PacManContainer />} />
            <Route path={'/calc'} render={() => <CalcContainer />} />
        </div>
    )
}

export default App
