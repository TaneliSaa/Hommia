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
import { Avatar, Button, Container, Grid, Popover, TextField } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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

  const handleHoverOver2 = (event) => {
    setAnchorEl2(event.currentTarget);
  }

  const handleClose2 = () => {
    setAnchorEl2(null);
  }

  const open = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);


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
              onClick={handleHoverOver}
              >
                Kirjaudu
              </Button>
              <Popover
                sx={{
                  pointerEvents: 'auto',
               }}
                open={open}
                anchorEl={anchorEl1}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                
               
              >
                <Container  maxWidth="xs">
                  <Box
                    sx={{
                      marginTop: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      maxHeight: 300,
                      maxWidth: 300,
                    }}
                    >
                      <Avatar sx={{ m: 1, bgcolor: '' }} />
                      <Typography variant="h5">
                        Kirjaudu sisään
                      </Typography>
                      <Box  noValidate sx={{ mt: 1 }}>
                        <TextField
                          size='small'
                          margin="dense"
                          required
                          fullWidth
                          id="email"
                          label="Sähköposti"
                          name="email"
                          autoComplete="email"
                          autoFocus
                        />
                        <TextField
                          size='small'
                          margin="dense"
                          required
                          fullWidth
                          name="password"
                          label="Salasana"
                          type="password"
                          id="password"
                          autoComplete="password"
                        />
                        <Button
                          type="submit"
                          fullWidth
                          variant="outlined"
                          sx={{ mt: 1, mb: 1 }}
                        >
                          Kirjaudu sisään
                        </Button>
                        <Box
                         sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          mb: 1
                         }}
                         >
                          <Link href='' variant="body2">
                            Unohditko salasanan?
                          </Link>
                        </Box>
                      </Box>
                    </Box>
                  </Container>
              </Popover>
              <Button
                color='inherit'
                size='small'
                variant=''
                startIcon={<ShoppingCart />}
                onClick={handleHoverOver2}
                >
                  Ostoskori
              </Button>

              <Popover
                sx={{
                  pointerEvents: 'auto',
               }}
                open={open2}
                anchorEl={anchorEl2}
                onClose={handleClose2}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 130,
                }}
                
               
              >
                <Container  maxWidth="xs">
                  <Typography variant='h6'>Ostoskori</Typography>
                  <Box
                    sx={{
                      marginTop: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      maxHeight: 300,
                      width: 300,
                    }}
                    >
                     <Typography
                      fullWidth
                      >
                        Ostoskorisi on tyhjä
                      </Typography>
                     <Button
                          type="submit"
                          fullWidth
                          variant="outlined"
                          sx={{ mt: 1, mb: 1 }}
                        >
                          Sulje
                        </Button>
                    </Box>
                  </Container>
              </Popover>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export {AppbarComponent};