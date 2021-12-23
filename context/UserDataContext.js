import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await axios.get("https://reqres.in/api/users");
        console.log(res);
        setUserData(res.data.data);
    };

    return (
        <UserDataContext.Provider
            value={{
                userData,
            }}
        >
            {children}
        </UserDataContext.Provider>
    );
};
