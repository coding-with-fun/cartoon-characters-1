import { Typography } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { UserDataContext } from "../context/UserDataContext";
import styles from "../styles/Home.module.css";

const Home = ({ data, status, statusText }) => {
    const { userData } = useContext(UserDataContext);

    useEffect(() => {
        // fetchData();

        console.log(data, status, statusText);
        // console.log(userData);
    }, [data, status, statusText]);

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

export const getStaticProps = async () => {
    const { data, status, statusText } = await axios.get(
        "https://reqres.in/api/users"
    );

    return {
        props: {
            data,
            status,
            statusText,
        }, // will be passed to the page component as props
    };
};

export default Home;
