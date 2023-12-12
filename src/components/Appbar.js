import { Button } from "@mui/base";
import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";

const Appbar = () => {


    return (
        <>
           <AppBar position="relative" sx={{bgcolor: "#00487C"}}>
                <Toolbar>
                    <Box display='flex' flexGrow={1}>
                        <Button variant='h6' href="/">Something</Button>
                    </Box>

                    <Button href="Register">Register</Button>

                    <Button href="Login">Login</Button>

                </Toolbar>

           </AppBar>

        </>
    );

} 

export {Appbar};