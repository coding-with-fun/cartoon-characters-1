import { Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter, withRouter } from "next/router";
import { useState } from "react";

const Home = ({ data, status, statusText }) => {
    const router = useRouter();

    const [myName, setMyName] = useState("");
    console.log(data);

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>

            {status === 200 ? (
                <Container
                    sx={{
                        display: "flex",
                        flexFlow: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {data.map((todo) => {
                        return (
                            <Typography variant="body1" key={todo.id}>
                                {todo.name}
                            </Typography>
                        );
                    })}

                    <TextField
                        value={myName}
                        onChange={(e) => {
                            setMyName(e.target.value);
                        }}
                    />

                    <Typography
                        variant="body1"
                        onClick={() => {
                            router.push({
                                pathname: "/name",
                                query: {
                                    name: myName,
                                },
                            });
                        }}
                    >
                        history.push to <code>/name</code> page.
                    </Typography>

                    <Link
                        href={{
                            pathname: "/name",
                            query: {
                                name: myName,
                            },
                        }}
                    >
                        <a>
                            Link to <code>/name</code> page.
                        </a>
                    </Link>
                </Container>
            ) : null}
        </div>
    );
};

export const getStaticProps = async () => {
    const { data, status, statusText } = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
        {
            params: {
                _limit: 3,
            },
        }
    );

    return {
        props: {
            data,
            status,
            statusText,
        },
    };
};

export default withRouter(Home);
