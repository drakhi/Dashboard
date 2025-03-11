import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Appbar from "./Appbar";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import Chip from "@mui/material/Chip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MoreIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import BrightnessMediumOutlinedIcon from "@mui/icons-material/BrightnessMediumOutlined";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid2,
} from "@mui/material";
import Body from "./Body";
import { Link } from "react-router-dom";
import Experience from "./Experience";
import Getintouch from "./Getintouch";
import Profile from "./Profile";
import Projects from "./Projects";
import Skills from "./Skills";
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import { useNavigate } from "react-router-dom";
import AppRoutes from "./Routes";
import nagesh from '../Images/Nag1.jpg';

import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const drawerWidth = 240;

const sidebarlist = [
  {
    name: "Body",
    rout: "body",
    icon: "",
    styled: {
      fontSize: '50px'
    }
  },
  {
    name: "Experience",
    rout: "experience",
    icon: "",
  },
  {
    name: "Profile",
    rout: "profile",
    icon: "",
  },
  {
    name: "Projects",
    rout: "projects",
    icon: "",
  },
  {
    name: "Skills",
    rout: "skills",
    icon: "",
  },
  {
    name: "Getintouch",
    rout: "getintouch",
    icon: "",
  },
];
 const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  })
);

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width:'100%',
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  // const theme = useTheme();
  const [theme, setTheme] = React.useState("Auto");
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [isDrawerMenuOpen, setIsDrawerMenuOpen] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  //Light Darkmode

  const [anchorE, setAnchorE] = React.useState(null);
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

  const menu = "primary-search-account-menu";
  const renderMenu1 = (
    <Menu
      id="basic-menu"
      anchorEl={anchorE}
      open={openele}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={() => handleThemeChange("Light")}>
        <ListItemIcon>
          {" "}
          <LightModeOutlinedIcon fontSize="small" />{" "}
        </ListItemIcon>
        Light
      </MenuItem>
      <MenuItem onClick={() => handleThemeChange("Dark")}>
        <ListItemIcon>
          {" "}
          <NightsStayOutlinedIcon fontSize="small" />{" "}
        </ListItemIcon>
        Dark
      </MenuItem>
      <MenuItem onClick={() => handleThemeChange("Auto")}>
        <ListItemIcon>
          {" "}
          <BrightnessMediumOutlinedIcon fontSize="small" />{" "}
        </ListItemIcon>
        Auto
      </MenuItem>
    </Menu>
  );




  
  // const [anchorE, setAnchorE] = React.useState(null);

  // const openele = Boolean(anchorE);

  // const handleClick = (event) => {
  //   setAnchorE(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorE(null);
  // };

  // const handleThemeChange = (selectedTheme) => {
  //   setTheme(selectedTheme);
  //   setAnchorE(null); // Close the menu
  //   console.log("Selected theme:", selectedTheme); // Perform any additional actions
  // };
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

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
  const showHideMenuIcon = () => {
    setIsDrawerMenuOpen(!isDrawerMenuOpen);
  };

  //Account drop down
  // const menuId = 'primary-search-account-menu';
  // const mobileMenuId = 'primary-search-account-menu-mobile';

  //Account drop down
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Typography variant="body1" marginLeft="19px" fontSize="19px">
        Account
      </Typography>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        {" "}
        <ListItemIcon>
          {" "}
          <NotificationsNoneRoundedIcon fontSize="small" />{" "}
        </ListItemIcon>
        Update
        <Chip label="45" size="small" color="primary" />
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        {" "}
        <ListItemIcon>
          <MessageRoundedIcon fontSize="small" />{" "}
        </ListItemIcon>
        Messages
        <Chip label="45" size="small" color="secondary" />
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          {" "}
          <ModeCommentOutlinedIcon fontSize="small" />{" "}
        </ListItemIcon>
        Comments
        <Chip label="45" size="small" color="info" />
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          {" "}
          <AssignmentTurnedInOutlinedIcon fontSize="small" />{" "}
        </ListItemIcon>
        Task
        <Chip label="45" size="small" color="success" />
      </MenuItem>
      <Divider />
      <Typography variant="body1" marginLeft="19px" fontSize="19px">
        Settings
      </Typography>
      <MenuItem onClick={handleMenuClose}>
        {" "}
        <ListItemIcon>
          {" "}
          <PersonAdd fontSize="small" />{" "}
        </ListItemIcon>{" "}
        Profile{" "}
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        {" "}
        <ListItemIcon>
          <Settings fontSize="small" />{" "}
        </ListItemIcon>{" "}
        Settings
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <PaymentOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Payments
        <Chip label="45" size="small" color="success" />
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <FeedOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Project
        <Chip label="45" size="small" color="info" />
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <LockOutlinedIcon fontSize="small" />
        </ListItemIcon>{" "}
        Lock Account
      </MenuItem>
    </Menu>
  );



  //Icon item drop down
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        {" "}
        <ListItemIcon>
          {" "}
          <NotificationsNoneRoundedIcon fontSize="small" />{" "}
        </ListItemIcon>{" "}
        Updates{" "}
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        {" "}
        <ListItemIcon>
          <MessageRoundedIcon fontSize="small" />{" "}
        </ListItemIcon>{" "}
        Message
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        {" "}
        <ListItemIcon>
          {" "}
          <FormatListBulletedRoundedIcon fontSize="small" />{" "}
        </ListItemIcon>{" "}
        Notification{" "}
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        {" "}
        <ListItemIcon>
          <AccountCircle fontSize="small" />{" "}
        </ListItemIcon>{" "}
        Profile
      </MenuItem>
    </Menu>
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} openDrawer={handleDrawerOpen}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 2,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
            DashBoard
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, mr: 2 }}
          >
            <Link to="/experience" style={{ padding: 5 }}>
              Users
            </Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Settings
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <IconButton size="large" color="inherit">
              <FormatListBulletedRoundedIcon />
            </IconButton>
            <IconButton size="large" color="inherit">
              <NotificationsIcon />
            </IconButton>



            <IconButton size="large" color="inherit">
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
              <LightModeOutlinedIcon />
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
              <Avatar
                alt="Travis Howard"
                src={nagesh}
              />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
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
      <StyledBox
        open={open}
        sx={{
          marginTop: "56px",
        }}
      >
        {/* <Box sx={{ display: "flex" }}> */}
        {/* <CssBaseline /> */}
        <AppRoutes />
        {/* </Box> */}
      </StyledBox>
      {renderMobileMenu} 
      {renderMenu}
       {renderMenu1}
      {/* {theme} */}
      <Drawer
        sx={{
          // width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor:'rgb(144,238,144)'
},
        }}
        variant="persistent"
        anchor="left"
        open={open}
      
      >
        <DrawerHeader>
          <Typography variant="h6" sx={{fontWeight:'bold'}}>Nagesh Vandana </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* <List>
       {sidebarlist.map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  {text.name}
                  {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                  {/* <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List> */} 
<List>
      {sidebarlist.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton onClick={() => navigate(item.rout)}>
            <ListItemText sx={{fontWeight: 700, color:'black', marginLeft:'25px'}} primary= {item.name}
             primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: 0,
                  color:'black'
                }} />
          </ListItemButton>
        </ListItem>
      ))}
      
    </List>
    {/* <Box>
    <Typography sx={{mt:'2'}}><a href="mailto:vandananagesh2001@gmail.com">Send a Mail</a></Typography>
    <Typography sx={{mt:'5'}}><a href="tel:+91-7729884738"> Contact </a></Typography>
    </Box> */}
    <Box sx={{ display: "flex", gap: 2,marginLeft:'38px', mt:'3'}}>
              <a href="https://github.com/Nagesh-12A?tab=repositories"><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/nagesh-vandana-9b4653275/"><LinkedInIcon/></a>
              <a href="https://x.com/home"><XIcon/></a>
              <a href="https://www.instagram.com/vandananagesh2001/"><InstagramIcon/></a>
            </Box>
      </Drawer>
    </Box>
  );
}

