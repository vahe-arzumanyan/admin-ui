import Dashboard from "../../../pages/dishboard";
import UserProfile from "../../../pages/user-profile/index";
import TableList from "../../../pages/table-list";
import Typography from "../../../pages/typography/index";
import Icons from "../../../pages/icons/index";
import Maps from "../../../pages/maps";
import Notifications from "../../../pages/notifications";

 export const useRoutingWareHouse = () => {

    const route = [
        {path: '/Dashboard', element: <Dashboard/>, icon: 'icon-pie-chart', title:'Dashboard'},
        {path: '/UserProfile', element: <UserProfile/>, icon: 'icon-user-circle', title:'User Profile'},
        {path: '/TableList', element: <TableList/>, icon: 'icon-paper-clip', title:'Table List'},
        {path: '/Typography', element: <Typography/>, icon: 'icon-lowercase', title:'Typography'},
        {path: '/Icons', element: <Icons/>, icon: 'icon-delta-icons', title:'Icons'},
        {path: '/Maps', element: <Maps/>, icon: 'icon-map', title:'Maps'},
        {path: '/Notifications', element: <Notifications/>, icon: 'icon-notification-bell', title:'Notifications'}

    ]
    return [route]
};
