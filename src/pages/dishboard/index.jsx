import React, {useState} from 'react';
import './style.scss';
import NavBar from "../../components/nav-bar";
import {UserData} from "../../components/chart-js/user-data/data"
import BarChart from "../../components/chart-js/BarChart";
import LineChart from "../../components/chart-js/LineChart";
import PieChart from "../../components/chart-js/PieChart";


const Dashboard = () => {

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 0.5,
            },
        ],
        options: {
            plugins: {
                legend: {
                    position: 'right',
                    align: 'start'
                }
            }
        }
    });

    return <div className='P-dashboard'>
        <NavBar name='Dashboard'/>
        {/* chart js content */}
        <div className="chart-container G-center">
            <div className='chart-content'>

                <div className='G-justify-between G-flex-wrap'>

                    {/* pie chart content*/}

                    <div className='P-pie-chart'>
                        <div className='P-pie-chart-border'>
                            <p className='P-pie-chart-title'>Pie Chart</p>
                            <PieChart chartData={userData}/>
                        </div>
                    </div>

                    {/* bar chart content */}

                    <div className='P-bar-chart'>
                        <div className='P-bar-chart-border'>
                            <p className='P-bar-chart-title'>Bar Chart</p>
                            <BarChart chartData={userData}/>
                        </div>
                    </div>
                </div>

                {/* line chart content */}

                <div className='P-line-chart'>
                    <div className='P-line-chart-border'>
<p className='P-line-chart-title'>Line Chart</p>
                        <LineChart chartData={userData}/>
                    </div>
                </div>
            </div>
        </div>
    </div>

};

export default Dashboard;