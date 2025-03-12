import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import Chip from '@mui/material/Chip';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import BrightnessMediumOutlinedIcon from '@mui/icons-material/BrightnessMediumOutlined';


import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Appbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [isDrawerMenuOpen, setIsDrawerMenuOpen] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  //Light Darkmode
  const [anchorE, setAnchorE] = React.useState(null);
  const [theme, setTheme] = React.useState("Auto");
  const openele = Boolean(anchorE);

  const handleClick = (event) => {
    setAnchorE(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorE(null);
  };


  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    setAnchorE(null); // Close the menu
    console.log("Selected theme:", selectedTheme); // Perform any additional actions
  };

  React.useEffect(() => {
    if (theme === "Light") {
      document.body.style.backgroundColor = "#ffffff"; // Light theme background
      document.body.style.color = "#000000"; // Light theme text
    } else if (theme === "Dark") {
      document.body.style.backgroundColor = "#121212"; // Dark theme background
      document.body.style.color = "#ffffff"; // Dark theme text
    } else {
      document.body.style.backgroundColor = "#f0f0f0"; // Auto theme (neutral)
      document.body.style.color = "#000000"; // Auto theme text
    }
  }, [theme]);

  const menu = 'primary-search-account-menu';
  const renderMenu1 = (
  <Menu
  id="basic-menu"
  anchorEl={anchorE}
  open={openele}
  onClose={handleClose}
  MenuListProps={{
    'aria-labelledby': 'basic-button',
  }}
>
  <MenuItem onClick={() => handleThemeChange("Light")}><ListItemIcon> <LightModeOutlinedIcon fontSize="small" /> </ListItemIcon>Light</MenuItem>
  <MenuItem onClick={() => handleThemeChange("Dark")}><ListItemIcon> <NightsStayOutlinedIcon fontSize="small" /> </ListItemIcon>Dark</MenuItem>
  <MenuItem onClick={() => handleThemeChange("Auto")}><ListItemIcon> <BrightnessMediumOutlinedIcon fontSize="small" /> </ListItemIcon>Auto</MenuItem>
</Menu>
  
  );


//Profile
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

  const showHideMenuIcon=()=>{
  setIsDrawerMenuOpen(!isDrawerMenuOpen)
  }


  //Account drop down
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
      <Typography variant='body1' marginLeft='19px' fontSize='19px'>Account</Typography>
      <Divider/>
      <MenuItem onClick={handleMenuClose}> <ListItemIcon> <NotificationsNoneRoundedIcon fontSize="small" /> </ListItemIcon> 
      Update 
      <Chip label="45" size="small" color="primary"/></MenuItem>
        <MenuItem onClick={handleMenuClose}>  <ListItemIcon><MessageRoundedIcon fontSize="small" /> </ListItemIcon> 
        Messages
        <Chip label="45" size="small" color="secondary"/>
        </MenuItem>
       <MenuItem onClick={handleMenuClose}><ListItemIcon> <ModeCommentOutlinedIcon fontSize="small" /> </ListItemIcon>
        Comments 
        <Chip label="45" size="small" color="info"/>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}><ListItemIcon> <AssignmentTurnedInOutlinedIcon fontSize="small" /> </ListItemIcon>
         Task
         <Chip label="45" size="small" color="success"/>
          </MenuItem>
        <Divider />
        <Typography variant='body1' marginLeft='19px' fontSize='19px'>Settings</Typography>
        <MenuItem onClick={handleMenuClose}> <ListItemIcon> <PersonAdd fontSize="small" /> </ListItemIcon> Profile </MenuItem>
        <MenuItem onClick={handleMenuClose}>  <ListItemIcon><Settings fontSize="small" /> </ListItemIcon> Settings</MenuItem>
        <MenuItem onClick={handleMenuClose}><ListItemIcon><PaymentOutlinedIcon fontSize="small"/></ListItemIcon>
        Payments
        <Chip label="45" size="small" color="success"/>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}><ListItemIcon><FeedOutlinedIcon fontSize="small" /></ListItemIcon>
        Project
        <Chip label="45" size="small" color="info"/>
        </MenuItem>
        <Divider/>
        <MenuItem onClick={handleMenuClose}><ListItemIcon><LockOutlinedIcon fontSize="small" /></ListItemIcon>  Lock Account</MenuItem>
    </Menu>
    
  );

  //Icon item drop down
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
      <MenuItem onClick={handleMenuClose}> <ListItemIcon> <NotificationsNoneRoundedIcon fontSize="small" /> </ListItemIcon> Updates </MenuItem>
        <MenuItem onClick={handleMenuClose}>  <ListItemIcon><MessageRoundedIcon fontSize="small" /> </ListItemIcon> Message</MenuItem>
        <MenuItem onClick={handleMenuClose}> <ListItemIcon> <FormatListBulletedRoundedIcon fontSize="small" /> </ListItemIcon> Notification </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>  <ListItemIcon><AccountCircle fontSize="small" /> </ListItemIcon> Profile</MenuItem>
        
    </Menu>
  );


  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    
    <Box >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            // sx={{ mr: 2 }}
             sx={{ mr: 2, ...(props.isDrawerMenuOpen && { display: 'none' }) }}

            onClick={()=>{handleDrawerOpen()}}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2 }}
          >
            DashBoard
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, mr: 2 }}
          >
              
                Users
            
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Settings
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <IconButton
              size="large"
              color="inherit"
            >
                <FormatListBulletedRoundedIcon/>
            </IconButton>
          <IconButton
              size="large"
              color="inherit"
            >
                <NotificationsIcon/>
            </IconButton>

            <IconButton size="large"  color="inherit"> 
                <MailIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label=" current account theme "
              aria-controls={menu}
              aria-haspopup="true"
              color="inherit"
              onClick={handleClick}
            >
                <LightModeOutlinedIcon/>
            </IconButton>
            
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
               <Avatar alt="Travis Howard" src="https://th.bing.com/th?id=OIP.iVfGc39LaNQAExez5y2T9AHaJQ&w=223&h=279&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2" />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex',sm:'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderMenu1}
      {theme}

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
      
      </Drawer>
    </Box>
  );
}