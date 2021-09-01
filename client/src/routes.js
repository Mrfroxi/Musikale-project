import {MAIN_ROUTE,LOGIN_ROUTE,REGISTRATION_ROUTE,ADMIN_ROUTE,  ADMIN_ROUTE_OWNER} from "./utils/consts"
import Auth from './pages/Auth'
import Main from './pages/Main'
import Admin from "./pages/Admin"
import AdminMusic from "./components/AdminMusic"
export const authRoutes = [
  {
    path:LOGIN_ROUTE,
    Component:Auth
  },
  {
    path:ADMIN_ROUTE,
    Component:Admin
  },
  {
    path:MAIN_ROUTE,
    Component:Main
  }
]

export const publicRoutes = [
  {
    path:ADMIN_ROUTE,
    Component:Admin
  },
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
  },
  // {
  //   path: ADMIN_ROUTE_OWNER,
  //   Component:AdminMusic
  // },
]
