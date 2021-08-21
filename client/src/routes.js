import {LOGIN_ROUTE,REGISTRATION_ROUTE} from "./utils/consts"
import Auth from './pages/Auth'
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
]
