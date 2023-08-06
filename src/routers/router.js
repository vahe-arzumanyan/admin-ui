import Dashboard from "../pages/dishboard";
import UserProfile from "../pages/add-user/add-profile";
import UsersList from "../pages/add-user/get-user";
import Typography from "../pages/typography";
import Icons from "../pages/icons";
import Map from "../pages/maps";
import Notifications from "../pages/notifications";
import LoginRegister from "../components/login";
import Logout from "../components/logout";

export const RouterNames = {
    DASHBOARD: "/Dashboard",
    USER_PROFILE: "/UserProfile",
    USERS_LIST: "/UsersList",
    TYPOGRAPHY: "/Typography",
    ICONS: "/Icons",
    MAPS: "/Map",
    NOTIFICATIONS: "/Notifications",
    LOGIN:"/Login",
    LOGOUT:"/Logout"
}


export const publicRouters = [
    {path: RouterNames.LOGIN, element:<LoginRegister />, icon: '', title:'Login'},
    {path: RouterNames.LOGOUT, element:<Logout />, icon: '', title:'Registration'}
]

export const privateRouters = [
    {path: RouterNames.DASHBOARD, element: <Dashboard/>, icon: 'icon-pie-chart', title:'Dashboard'},
    {path: RouterNames.USER_PROFILE, element: <UserProfile/>, icon: 'icon-user-circle', title:'User Profile'},
    {path: RouterNames.USERS_LIST, element: <UsersList/>, icon: 'icon-paper-clip', title:'Users List'},
    {path: RouterNames.TYPOGRAPHY, element: <Typography/>, icon: 'icon-lowercase', title:'Typography'},
    {path: RouterNames.ICONS, element: <Icons/>, icon: 'icon-delta-icons', title:'Icons'},
    {path: RouterNames.MAPS, element: <Map/>, icon: 'icon-map', title:'Maps'},
    {path: RouterNames.NOTIFICATIONS, element: <Notifications/>, icon: 'icon-notification-bell', title:'Notifications'},
]

export const AdminNavBarList = [
    {path: RouterNames.DASHBOARD, element: <Dashboard/>, icon: 'icon-pie-chart', title:'Dashboard'},
    {path: RouterNames.USER_PROFILE, element: <UserProfile/>, icon: 'icon-user-circle', title:'User Profile'},
    {path: RouterNames.USERS_LIST, element: <UsersList/>, icon: 'icon-paper-clip', title:'Users List'},
    {path: RouterNames.TYPOGRAPHY, element: <Typography/>, icon: 'icon-lowercase', title:'Typography'},
    {path: RouterNames.ICONS, element: <Icons/>, icon: 'icon-delta-icons', title:'Icons'},
    {path: RouterNames.MAPS, element: <Map/>, icon: 'icon-map', title:'Maps'},
    {path: RouterNames.NOTIFICATIONS, element: <Notifications/>, icon: 'icon-notification-bell', title:'Notifications'},
]



export const CONNECTION_API = 'https://crudcrud.com/api/7a5e7cb3733748c388b8e8c6212c97b1/'