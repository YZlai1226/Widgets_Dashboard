import WidgetsManager from "../components/stuctureComponents/WidgetsManager";
import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import './Login.css'
// import SideBar from "../components/stuctureComponents/SideBar";

const Dashboard = (props) => {
    let navigate = useNavigate();
    const { auth, setAuth } = useContext(AuthContext);
    console.log(auth);

    useEffect(() => {
        if (auth == null) {
            navigate("/")
        }
    }, []);

    if (props.widgetsList) {
    }
    
    return (
        <div>
            <WidgetsManager widgetsList={props.widgetsList} deleteButtons={props.deleteButtons} onChange={props.onChange} userId={props.userId} />
        </div>
    )
};

export default Dashboard;