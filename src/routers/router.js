import Dashboard from "../components/side-bar/nav-link/dishboard";
import UserProfile from "../components/side-bar/nav-link/user-profile";
import TableList from "../components/side-bar/nav-link/table-list";
import Typography from "../components/side-bar/nav-link/typography";
import Icons from "../components/side-bar/nav-link/icons";
import Maps from "../components/side-bar/nav-link/maps";
import Notifications from "../components/side-bar/nav-link/notifications";

export const RouterNames = {
    DASHBOARD: "/Dashboard",
    USER_PROFILE: "/UserProfile",
    TABLE_LIST: "/TableList",
    TYPOGRAPHY: "/Typography",
    ICONS: "/Icons",
    MAPS: "/Maps",
    NOTIFICATIONS: "/Notifications",
}


const publicRouters = []

export const privateRouters = [
    {path: RouterNames.DASHBOARD, element: <Dashboard/>, icon: 'icon-pie-chart', title:'Dashboard'},
    {path: RouterNames.USER_PROFILE, element: <UserProfile/>, icon: 'icon-user-circle', title:'User Profile'},
    {path: RouterNames.TABLE_LIST, element: <TableList/>, icon: 'icon-paper-clip', title:'Table List'},
    {path: RouterNames.TYPOGRAPHY, element: <Typography/>, icon: 'icon-lowercase', title:'Typography'},
    {path: RouterNames.ICONS, element: <Icons/>, icon: 'icon-delta-icons', title:'Icons'},
    {path: RouterNames.MAPS, element: <Maps/>, icon: 'icon-map', title:'Maps'},
    {path: RouterNames.NOTIFICATIONS, element: <Notifications/>, icon: 'icon-notification-bell', title:'Notifications'}

]