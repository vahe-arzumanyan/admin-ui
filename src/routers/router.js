import Dashboard from "../pages/dishboard";
import UserProfile from "../pages/user-profile";
import TableList from "../pages/table-list";
import Typography from "../pages/typography";
import Icons from "../pages/icons";
import Maps from "../pages/maps";
import Notifications from "../pages/notifications";
import LoginRegister from "../components/login";

export const RouterNames = {
    DASHBOARD: "/Dashboard",
    USER_PROFILE: "/UserProfile",
    TABLE_LIST: "/TableList",
    TYPOGRAPHY: "/Typography",
    ICONS: "/Icons",
    MAPS: "/Maps",
    NOTIFICATIONS: "/Notifications",
    LOGIN:"/Login",
    REGISTRATION:"/Registration"
}


export const publicRouters = [
    {path: RouterNames.LOGIN, element:<LoginRegister />, icon: '', title:'Login'},
    // {path: RouterNames.REGISTRATION, element:<Registration />, icon: '', title:'Registration'}
]

export const privateRouters = [
    {path: RouterNames.DASHBOARD, element: <Dashboard/>, icon: 'icon-pie-chart', title:'Dashboard'},
    {path: RouterNames.USER_PROFILE, element: <UserProfile/>, icon: 'icon-user-circle', title:'User Profile'},
    {path: RouterNames.TABLE_LIST, element: <TableList/>, icon: 'icon-paper-clip', title:'Table List'},
    {path: RouterNames.TYPOGRAPHY, element: <Typography/>, icon: 'icon-lowercase', title:'Typography'},
    {path: RouterNames.ICONS, element: <Icons/>, icon: 'icon-delta-icons', title:'Icons'},
    {path: RouterNames.MAPS, element: <Maps/>, icon: 'icon-map', title:'Maps'},
    {path: RouterNames.NOTIFICATIONS, element: <Notifications/>, icon: 'icon-notification-bell', title:'Notifications'},
]

export const AdminNavBarList = [
    {path: RouterNames.DASHBOARD, element: <Dashboard/>, icon: 'icon-pie-chart', title:'Dashboard'},
    {path: RouterNames.USER_PROFILE, element: <UserProfile/>, icon: 'icon-user-circle', title:'User Profile'},
    {path: RouterNames.TABLE_LIST, element: <TableList/>, icon: 'icon-paper-clip', title:'Table List'},
    {path: RouterNames.TYPOGRAPHY, element: <Typography/>, icon: 'icon-lowercase', title:'Typography'},
    {path: RouterNames.ICONS, element: <Icons/>, icon: 'icon-delta-icons', title:'Icons'},
    {path: RouterNames.MAPS, element: <Maps/>, icon: 'icon-map', title:'Maps'},
    {path: RouterNames.NOTIFICATIONS, element: <Notifications/>, icon: 'icon-notification-bell', title:'Notifications'},
]



export const CONNECTION_API = 'https://crudcrud.com/api/7a5e7cb3733748c388b8e8c6212c97b1/'