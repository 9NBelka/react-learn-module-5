
import {NavLink} from 'react-router-dom'
import clsx from "clsx";
import css from './Navigation.module.css'
//NavLink для стилизации 
export default function Navigation() {
  return (
      <nav className={css.nav}>
        <NavLink to="/" className={({ isActive }) =>{
          return clsx(css.link, isActive && css.isActive)
        }}>Home</NavLink> 
        <NavLink to="/payments" className={({ isActive }) =>{
          return clsx(css.link, isActive && css.isActive)
        }}>Payments</NavLink>
      </nav>
  )
} 