import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UserDataProvider } from "../context/UserDataContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    const theme = createTheme({
        typography: {
            fontFamily: '"Poppins", sans-serif',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <UserDataProvider>
                <Component {...pageProps} />
            </UserDataProvider>
        </ThemeProvider>
    );
}

export default MyApp;
