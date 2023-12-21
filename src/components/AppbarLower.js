import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Container, Popover, Typography } from '@mui/material';
import { useState } from 'react';


const AppbarLower = () => {

    const [anchorEl1,setAnchorEl1] = useState(null);

    const handlePopOverOpen1 = (event) => {
        setAnchorEl1(event.currentTarget);
    }

    const handlePopOverClose1 = () => {
        setAnchorEl1(null);
    }

    const open1 = Boolean(anchorEl1);

    const [anchorEl2,setAnchorEl2] = useState(null);

    const handlePopOverOpen2 = (event) => {
        setAnchorEl2(event.currentTarget);
    }

    const handlePopOverClose2 = () => {
        setAnchorEl2(null);
    }

    const open2 = Boolean(anchorEl2);

    const [anchorEl3,setAnchorEl3] = useState(null);

    const handlePopOverOpen3 = (event) => {
        setAnchorEl3(event.currentTarget);
    }

    const handlePopOverClose3 = () => {
        setAnchorEl3(null);
    }

    const open3 = Boolean(anchorEl3);

    const [anchorEl4,setAnchorEl4] = useState(null);

    const handlePopOverOpen4 = (event) => {
        setAnchorEl4(event.currentTarget);
    }

    const handlePopOverClose4 = () => {
        setAnchorEl4(null);
    }

    const open4 = Boolean(anchorEl4);

    const [anchorEl5,setAnchorEl5] = useState(null);

    const handlePopOverOpen5 = (event) => {
        setAnchorEl5(event.currentTarget);
    }

    const handlePopOverClose5 = () => {
        setAnchorEl5(null);
    }

    const open5 = Boolean(anchorEl5);

    const [anchorEl6,setAnchorEl6] = useState(null);

    const handlePopOverOpen6 = (event) => {
        setAnchorEl6(event.currentTarget);
    }

    const handlePopOverClose6 = () => {
        setAnchorEl6(null);
    }

    const open6 = Boolean(anchorEl6);

    const [anchorEl7,setAnchorEl7] = useState(null);

    const handlePopOverOpen7 = (event) => {
        setAnchorEl7(event.currentTarget);
    }

    const handlePopOverClose7 = () => {
        setAnchorEl7(null);
    }

    const open7 = Boolean(anchorEl7);
    

  return (
    <>
    
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='inherit'>
            <Container fixed>
                <Toolbar disableGutters>
                    <Button
                        color='inherit'
                        size='small'
                        variant=''
                        onClick={handlePopOverOpen1}
                        >
                        Tuotteet1
                    </Button>
                    <Button
                        color='inherit'
                        size='small'
                        variant=''
                        onClick={handlePopOverOpen2}
                        >
                        Tuotteet2
                    </Button>
                    <Button
                        color='inherit'
                        size='small'
                        variant=''
                        onClick={handlePopOverOpen3}
                        >
                        Tuotteet3
                    </Button>
                    <Button
                        color='inherit'
                        size='small'
                        variant=''
                        href=''
                        onClick={handlePopOverOpen4}
                        >
                        Tuotteet4
                    </Button>
                    <Button
                        color='inherit'
                        size='small'
                        variant=''
                        href=''
                        onClick={handlePopOverOpen5}
                        >
                        Tuotteet5
                    </Button>
                    <Button
                        color='inherit'
                        size='small'
                        variant=''
                        href=''
                        onClick={handlePopOverOpen6}
                        >
                        Tuotteet6
                    </Button>
                    <Button
                        color='inherit'
                        size='small'
                        variant=''
                        href=''
                        onClick={handlePopOverOpen7}
                        >
                        Tuotteet7
                    </Button>
            </Toolbar>  
            </Container>
        </AppBar>
        </Box>
        

        <Popover
         sx={{
            pointerEvents: 'auto',
         }}
         open={open1}
         anchorEl={anchorEl1}
         anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
         }}
         transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
         }}
         onClose={handlePopOverClose1}
         disableRestoreFocus
         >
            <Container>
                <Box
                 sx={{
                    marginTop: 1,
                    display: 'flex',
                    lexDirection: 'column',
                    alignItems: 'center',
                    width: 1100,
                    height: 600,
                    border: 1,
                    borderColor: '',
                    bgcolor: 'primary.main',
                 }}
                >
                    <Typography>Tuotteet1</Typography>
                </Box>
            </Container>
        </Popover>

        <Popover
         sx={{
            pointerEvents: 'auto',
         }}
         open={open2}
         anchorEl={anchorEl2}
         anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
         }}
         transformOrigin={{
            vertical: 0,
            horizontal: 117
         }}
         onClose={handlePopOverClose2}
         disableRestoreFocus
         
         >
            <Container>
                <Box
                 sx={{
                    marginTop: 1,
                    display: 'flex',
                    lexDirection: 'column',
                    alignItems: 'center',
                    width: 1100,
                    height: 600,
                    border: 1,
                    borderColor: '',
                    bgcolor: 'primary.main',
                 }}
                >
                    <Typography>Tuotteet2</Typography>
                </Box>
            </Container>
        </Popover>

        <Popover
         sx={{
            pointerEvents: 'auto',
         }}
         open={open3}
         anchorEl={anchorEl3}
         anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
         }}
         transformOrigin={{
            vertical: 0,
            horizontal: 234
         }}
         onClose={handlePopOverClose3}
         disableRestoreFocus
         
         >
            <Container>
                <Box
                 sx={{
                    marginTop: 1,
                    display: 'flex',
                    lexDirection: 'column',
                    alignItems: 'center',
                    width: 1100,
                    height: 600,
                    border: 1,
                    borderColor: '',
                    bgcolor: 'primary.main',
                 }}
                >
                    <Typography>Tuotteet3</Typography>
                </Box>
            </Container>
        </Popover>

        <Popover
         sx={{
            pointerEvents: 'auto',
         }}
         open={open4}
         anchorEl={anchorEl4}
         anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
         }}
         transformOrigin={{
            vertical: 0,
            horizontal: 351
         }}
         onClose={handlePopOverClose4}
         disableRestoreFocus
         
         >
            <Container>
                <Box
                 sx={{
                    marginTop: 1,
                    display: 'flex',
                    lexDirection: 'column',
                    alignItems: 'center',
                    width: 1100,
                    height: 600,
                    border: 1,
                    borderColor: '',
                    bgcolor: 'primary.main',
                 }}
                >
                    <Typography>Tuotteet4</Typography>
                </Box>
            </Container>
        </Popover>

        <Popover
         sx={{
            pointerEvents: 'auto',
         }}
         open={open5}
         anchorEl={anchorEl5}
         anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
         }}
         transformOrigin={{
            vertical: 0,
            horizontal: 468
         }}
         onClose={handlePopOverClose5}
         disableRestoreFocus
         
         >
            <Container>
                <Box
                 sx={{
                    marginTop: 1,
                    display: 'flex',
                    lexDirection: 'column',
                    alignItems: 'center',
                    width: 1100,
                    height: 600,
                    border: 1,
                    borderColor: '',
                    bgcolor: 'primary.main',
                 }}
                >
                    <Typography>Tuotteet5</Typography>
                </Box>
            </Container>
        </Popover>

        <Popover
         sx={{
            pointerEvents: 'auto',
         }}
         open={open6}
         anchorEl={anchorEl6}
         anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
         }}
         transformOrigin={{
            vertical: 0,
            horizontal: 585
         }}
         onClose={handlePopOverClose6}
         disableRestoreFocus
         
         >
            <Container>
                <Box
                 sx={{
                    marginTop: 1,
                    display: 'flex',
                    lexDirection: 'column',
                    alignItems: 'center',
                    width: 1100,
                    height: 600,
                    border: 1,
                    borderColor: '',
                    bgcolor: 'primary.main',
                 }}
                >
                    <Typography>Tuotteet6</Typography>
                </Box>
            </Container>
        </Popover>

        <Popover
         sx={{
            pointerEvents: 'auto',
         }}
         open={open7}
         anchorEl={anchorEl7}
         anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
         }}
         transformOrigin={{
            vertical: 0,
            horizontal: 702
         }}
         onClose={handlePopOverClose7}
         disableRestoreFocus
         
         >
            <Container>
                <Box
                 sx={{
                    marginTop: 1,
                    display: 'flex',
                    lexDirection: 'column',
                    alignItems: 'center',
                    width: 1100,
                    height: 600,
                    border: 1,
                    borderColor: '',
                    bgcolor: 'primary.main',
                 }}
                >
                    <Typography>Tuotteet7</Typography>
                </Box>
            </Container>
        </Popover>



    </>
  );
}
    
export {AppbarLower};