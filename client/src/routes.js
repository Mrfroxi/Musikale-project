import {MAIN_ROUTE,LOGIN_ROUTE,REGISTRATION_ROUTE} from "./utils/consts"
import Auth from './pages/Auth'
import Main from './pages/Main'
console.log(LOGIN_ROUTE)
export const authRoutes = [
  {
    path:LOGIN_ROUTE,
    Component:Auth
  },
]

export const publicRoutes = [
  {
    path:LOGIN_ROUTE,
    Component:Auth
  },
  {
    path:REGISTRATION_ROUTE,
    Component:Auth
  },
  {
    path:MAIN_ROUTE,
    Component:Main
  }
]
