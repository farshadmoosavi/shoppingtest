import React, { useContext } from "react";
import { useEffect } from "react";
import { UserContext } from "../UserContext";

const Dashboard = () => {
    useEffect(() => {
        document.title = 'Dashboard';
      },[])

      const userContext = useContext(UserContext);
      console.log(userContext);

    return (
        <h1>
            Dashboard
        </h1>
    );
}

export default Dashboard;