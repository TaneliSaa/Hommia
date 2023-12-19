//Importit
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Home from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Login from '@mui/icons-material/Login';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button, Container, Paper, Popover } from '@mui/material';
import { useState } from 'react';

//Tyylimäärittelyt
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(20),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 33),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(1)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '30ch',
      },
    },
  }));

  

  
const AppbarComponent = () => {

  //State-muuttujat
  const [anchorEl1,setAnchorEl1] = useState(null);
  const [anchorEl2,setAnchorEl2] = useState(null);

  const handleHoverOver = (event) => {
    setAnchorEl1(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl1(null);
  }
  
  const open = Boolean(anchorEl1);

  


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='success'>
        <Container>
          <Toolbar disableGutters variant='regular'>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              href='/'
              sx={{ mr: 1 }}
            >
              <Home />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Verkkokauppa
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Kirjoita hakusana"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
              color='inherit'
              size='small'
              variant=''
              startIcon={<Login />}
              href='Login'
              onMouseEnter={handleHoverOver}
              
              >
                Kirjaudu
              </Button>
              <Popover
                open={open}
                anchorEl={anchorEl1}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
               
              >
                <Paper>
                  <form>
                    <label>
                      Nimi
                      <input type='text' />
                    </label>
                    <br />
                    <label>
                      Salasana
                      <input type='password' />
                    </label>
                  </form>
                </Paper>
              </Popover>
              <Button
              color='inherit'
              size='small'
              variant=''
              startIcon={<ShoppingCart />}
              href='ShoppingCart'
              >
                Ostoskori
              </Button>
              
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-haspopup="true"
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
    
export {AppbarComponent};