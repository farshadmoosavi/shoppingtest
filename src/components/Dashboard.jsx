import React from "react";
import { useEffect } from "react";

const Dashboard = () => {
    useEffect(() => {
        document.title = 'Dashboard';
      },[])
    return (
        <h1>
            Dashboard
        </h1>
    );
}

export default Dashboard;