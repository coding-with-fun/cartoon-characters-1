import { Typography } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { UserDataContext } from "../context/UserDataContext";
import styles from "../styles/Home.module.css";

const Home = () => {
    const { userData } = useContext(UserDataContext);

    useEffect(() => {
        // fetchData();

        console.log(userData);
    }, [userData]);

    const handleSendAPI = async () => {
        const response = await axios.post("https://reqres.in/api/users", {
            avatar: "https://reqres.in/img/faces/1-image.jpg",
            email: "george.bluth@reqres.in",
            first_name: "George",
            last_name: "Bluth",
        });
        console.log(response.data);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>

            <div>
                <Typography variant="h3">Hello World</Typography>

                <button onClick={handleSendAPI}>Send</button>
            </div>
        </div>
    );
};

export default Home;
