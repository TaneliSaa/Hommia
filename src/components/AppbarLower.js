import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Login from '@mui/icons-material/Login';
import { Container, Typography } from '@mui/material';


const AppbarLower = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        >
        <MenuItem>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
                <ShoppingCart />
            </Badge>
            </IconButton>
            <p>Messages</p>
        </MenuItem>
        <MenuItem>
            <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            >
            <Badge>
                <Login />
            </Badge>
            </IconButton>
            <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            >
            <AccountCircle />
            </IconButton>
            <p>Profile</p>
        </MenuItem>
        </Menu>
    );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='inherit'>
        <Container fixed>
            <Toolbar disableGutters>
                <Typography
                 variant='h6'
                 noWrap
                 component="a"
                 sx={{
                    mr: 5,
                    display: {xs: 'none', md: 'flex'}
                    
                 }}
                >
                    Tuotteet1
                </Typography>
                <Typography
                 variant='h6'
                 noWrap
                 component="a"
                 sx={{
                    mr: 5,
                    display: {xs: 'none', md: 'flex'}
                    
                 }}
                >
                    Tuotteet2
                </Typography>
                <Typography
                 variant='h6'
                 noWrap
                 component="a"
                 sx={{
                    mr: 5,
                    display: {xs: 'none', md: 'flex'}
                    
                 }}
                >
                    Tuotteet3
                </Typography>
                <Typography
                 variant='h6'
                 noWrap
                 component="a"
                 sx={{
                    mr: 5,
                    display: {xs: 'none', md: 'flex'}
                    
                 }}
                >
                    Tuotteet4
                </Typography>
                <Typography
                 variant='h6'
                 noWrap
                 component="a"
                 sx={{
                    mr: 5,
                    display: {xs: 'none', md: 'flex'}
                    
                 }}
                >
                    Tuotteet5
                </Typography>
                <Typography
                 variant='h6'
                 noWrap
                 component="a"
                 sx={{
                    mr: 5,
                    display: {xs: 'none', md: 'flex'}
                    
                 }}
                >
                    Tuotteet6
                </Typography>
                <Typography
                 variant='h6'
                 noWrap
                 component="a"
                 sx={{
                    mr: 5,
                    display: {xs: 'none', md: 'flex'}
                    
                 }}
                >
                    Tuotteet7
                </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
    
export {AppbarLower};