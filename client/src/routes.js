import {MAIN_ROUTE,LOGIN_ROUTE,REGISTRATION_ROUTE,ADMIN_ROUTE,PlayListItem} from "./utils/consts"
import Auth from './pages/Auth'
import Main from './pages/Main'
import Admin from "./pages/Admin"
import AdminMusic from "./components/adminMusic"
import UsersList from "./components/usersList"
import PlayLists from './components/adminPlayLists'
import ElementPlayList from './components/trackInPlayList'
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
  },
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
  {
    path:'/admin/AdminMusic',
    Component:AdminMusic
  },
  {
    path:'/admin/Users',
    Component:UsersList
  },
  {
    path:'/admin/AdminPlayLists',
    Component:PlayLists
  },
  {
    path:PlayListItem + '/:id',
    Component:ElementPlayList
  }
]
