import { Button } from "@mui/base";
import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";

const AppiBaari = () => {


    return (
        <>
           <AppBar position="relative" sx={{bgcolor: "#00487C"}}>
                <Toolbar>
                    <Box display='flex' flexGrow={1}>
                        <Button variant='h6' href="/">Jotain</Button>
                    </Box>

                </Toolbar>

           </AppBar>

        </>
    );

} 

export {AppiBaari};