import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from '../CartWidget/CartWidget';
import SettingsIcon from '@mui/icons-material/Settings';
import SlideComponent from './slideComponent';
import { Link, NavLink } from 'react-router-dom';

const pages = [
  { label: 'Men', cat: "men's clothing" },
  { label: 'Women', cat: "women's clothing" },
  { label: 'Jewelery', cat: 'jewelery' },
];
const settings = ['Perfil', 'Métodos de Pago', 'Dashboard', 'Logout'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  //const [openMenu, setOpenMenu] = React.useState();
  const [isHovered, setIsHovered] = React.useState(false);
  const [selectedPage, setSelectedPage] = React.useState(null);

  // Para Abrir Menu
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  /*const handleOpenMenu = (page) => {
    setOpenMenu(page.cat);
  };*/

  const handleMouseEnter = (page) => {
    setIsHovered(true);
    setSelectedPage(page.cat);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setSelectedPage(null);
  };

  const cant = 3;

  return (
    <AppBar position="static" sx={{ backgroundColor: 'lightyellow', color: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TradeZone
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  sx={{ color: 'black', display: 'flex' }}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TradeZone
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                component={NavLink}
                to={`/products/${page.cat}`}
                onMouseEnter={() => handleMouseEnter(page)}
                onMouseLeave={handleMouseLeave}
                sx={{
                  color: page.cat === selectedPage ? 'blue' : 'black',
                  display: 'flex',
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
          {isHovered && <SlideComponent selectedPage={selectedPage} />}
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <SettingsIcon />
              </IconButton>
            </Tooltip>
            <Box sx={{ ml: 2 }}>{}</Box>
            <CartWidget cartQuantity={cant} />
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;



