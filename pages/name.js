import { withRouter, useRouter } from "next/router";
import { Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const Name = (props) => {
    const router = useRouter();

    const [title, setTitle] = useState("One Title");
    const [body, setBody] = useState("One Body");

    const handleSendValue = async () => {
        const response = await axios.post(
            "https://jsonplaceholder.typicode.com/posts",
            {
                title,
                body,
            },
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-type": "application/json; charset=UTF-8",
                },
            }
        );

        console.log(response);
    };

    return (
        <Container
            sx={{
                display: "flex",
                flexFlow: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography variant="body1">
                Your name is {props.router.query.name}
            </Typography>

            <Typography variant="body2" onClick={() => router.back()}>
                Click here to go back!!
            </Typography>

            <TextField
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            />
            <TextField
                value={body}
                onChange={(e) => {
                    setBody(e.target.value);
                }}
            />

            <Button onClick={handleSendValue}>Send</Button>
        </Container>
    );
};

export default withRouter(Name);
