import { Typography } from "@mui/material";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = ({ posts }) => {
    console.log(posts);

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
            </div>
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    };
}

export default Home;
