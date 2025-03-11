import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
} from "@mui/material";
import Highcharts, { color } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import ButtonGroup from "@mui/material/ButtonGroup";
import LinearProgress from "@mui/material/LinearProgress";
import { linearProgressClasses } from "@mui/material/LinearProgress";
// Styled Progress Bar
const StyledLinearProgress = styled(LinearProgress)(({ theme, color }) => ({
  height: 8,
  borderRadius: 4,
  [`& .MuiLinearProgress-bar`]: {
    backgroundColor: color || theme.palette.primary.main,
  },
}));

//progress bars
const BorderLinearProgress = styled(LinearProgress)(
  ({ theme, colorValue }) => ({
    height: 4,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[800],
      ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: colorValue,
      ...theme.applyStyles("dark", {
        backgroundColor: "#308fe8",
      }),
    },
  })
);

function Body() {
  const options = {
    chart: {
      type: "line",
      backgroundColor: "", // You can change this to bar, column, pie, etc.
    },
    title: {
      text: "",
      style: {
        color: "#2a9df4", // Title text color
        fontSize: "18px",
      }, // Title of the chart
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // X-axis labels
      labels: {
        style: {
          color: "#ff6347", // X-axis labels text color
        },
      },
    },
    yAxis: {
      title: {
        text: "Applications", // Y-axis title
        style: {
          color: "#32cd32", // Y-axis title text color
        },
      },
      labels: {
        style: {
          color: "#32cd32", // Y-axis labels text color
        },
      },
    },
    legend: {
      itemStyle: {
        color: "#800080", // Legend item text color
      },
    },
    tooltip: {
      style: {
        color: "#ffffff", // Tooltip text color
      },
    },
    plotOptions: {
      areaspline: {
        //   threshold: Infinity,
        fillColor: "red",
        //   marker: {
        //     radius: 4
      },
    },
    series: [
      {
        name: "LinkedIn",
        data: [12, 10, 50, 80, 70, 50], // Data points
      },
      {
        name: "Naukri",
        data: [15, 25, 30, 45, 70, 80],
      },
    ],
  };

  return (
    // <Container fixed  sx={{
    //   background: "rgb(33, 38, 49)",
    //   border: "1px solid gray",
    // }}>
    <>
      <Box
        fixed
        sx={{
          background: "rgb(33, 38, 49)",
          border: "1px solid gray",
        }}
      >
        <Box
          sx={{
            background: "rgb(33, 38, 49)",
            borderRadius: "5px",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              background: "rgb(33, 38, 49)",
              borderRadius: "5px",
              padding: "15px",
            }}
          >
            <Grid container spacing={2} >
              {data.map((item, index) => (
                <Grid size={{ xs: 12, sm: 12, md: 4 }} key={index}>
                  <Card
                    style={{
                      backgroundColor: item.color,
                      position: "relative",
                    }}
                  >
                    <CardHeader
                      action={
                        <IconButton
                          aria-label="settings"
                          sx={{ color: "white" }}
                        >
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={
                        <>
                          <Typography
                            sx={{ color: "white", fontSize: "30px" }}
                            variant="caption"
                          >
                            {item.Ammount}
                          </Typography>
                          <Typography
                            sx={{ color: "white", fontSize: "20px" }}
                            variant="caption"
                          >
                            {item.Percentage}
                          </Typography>
                        </>
                      }
                      subheader={
                        <Typography sx={{ color: "white" }} variant="caption">
                          {item.text}
                        </Typography>
                      }
                    />

                    <CardMedia
                      sx={{ borderRadius: "17px" }}
                      component="img"
                      height="119px"
                      image={require(`../Images/${item.image}`)}
                      alt={item.title}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
         
          {/* graph */}

          <Box
            sx={{
              background: "rgb(33, 38, 49)",
              border: "0px solid gray",
              padding: "15px",
            }}
          >
            <Box sx={{ width: "100%", mb: "15px" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                  <Typography variant="h6" color="white">
                    Social Media [LinkedIn && Naukri]
                  </Typography>
                  <Typography variant="h6" color="gray">
                    January-March 2025
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                  <Box style={{ display: "flex", justifyContent: "flex-end" }}>
                    <ButtonGroup>
                      <Button variant="outlined">One</Button>
                      <Button variant="contained" sx={{ color: "white" }}>
                        Two
                      </Button>
                      <Button variant="outlined">Three</Button>
                    </ButtonGroup>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
            ></HighchartsReact>
          </Box>

          {/* Cards */}
          <Box
            sx={{
              flexGrow: 1,
              background: "rgb(33, 38, 49)",
              borderRadius: "5px",
              padding: "15px",
            }}
          >
            <Grid container spacing={2}>
              {services.map((service, index) => (
                <Grid size={{ xs: 12, sm: 12, md: 4 }} key={index}>
                  <Card>
                    <CardMedia
                      sx={{ borderRadius: "17px" }}
                      component="img"
                      height="180px"
                      image={service.image}
                      alt={service.title}
                    />
                    <CardContent
                      sx={{
                        background: "rgb(33, 38, 49)",
                        border: "0px solid gray",
                        borderRadius: "5px",
                      }}
                    >
                      <Grid container spacing={4}>
                        <Grid size={{ xs: 5, sm: 5, md: 5 }}>
                          <Typography
                            variant="h5"
                            sx={{ textAlign: "center", color: "white" }}
                          >
                            {service.Frinds}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{ textAlign: "center", color: "whitesmoke" }}
                          >
                            {service.follows}
                          </Typography>
                        </Grid>

                        <Divider
                          orientation="vertical"
                          flexItem
                          sx={{ background: "red",width:'3px' }}
                        />

                        <Grid size={{ xs: 5, sm: 5, md: 5 }}>
                          <Typography
                            variant="h5"
                            sx={{ textAlign: "center", color: "white" }}
                          >
                            {service.Feed}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{ textAlign: "center", color: "whitesmoke" }}
                          >
                            {service.message}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box
            sx={{
              height: "40px",
              backgroundColor: "#57B956",
              padding: "15px",
            }}
          >
            <Typography variant="h5" sx={{color: "black" }}>
            <strong>Job In India</strong>
            </Typography>
          </Box>
          <Divider />
          <Box
            sx={{
              flexGrow: 1,
              background: "rgb(33, 38, 49)",
              borderRadius: "5px",
              padding: "15px",
            }}
          >
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <Grid container spacing={2} sx={{ marginTop: "18px" }}>
                  <Grid size={{ xs: 6, sm: 6, md: 6 }}>
                    <Box
                      sx={{
                        // marginLeft: "50px",
                        mb: "28px",
                        boederLeftWidth: "55px",
                        borderLeftColor: "rgb(36, 149, 66)",
                        borderLeftStyle: 'solid',
                        paddingLeft:'15px'
                      }}
                    >
                      <Typography variant="body1" sx={{ color: "whitesmoke" }}>
                        <strong>New Connections</strong>
                      </Typography>
                      <Typography variant="h6" sx={{ color: "whitesmoke" }}>
                        <strong>323</strong>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6, sm: 6, md: 6 }}>
                    <Box sx={{
                        // marginLeft: "50px",
                        mb: "28px",
                        boederLeftWidth: "55px",
                        borderLeftColor: "blue",
                        borderLeftStyle: 'solid',
                        paddingLeft:'15px'
                      }}>
                      <Typography variant="body1" sx={{ color: "whitesmoke" }}>
                      <strong>Hiring</strong>
                      </Typography>
                      <Typography variant="h6" sx={{ color: "whitesmoke" }}>
                      <strong>250</strong>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={2}
                  size={{ xs: 12, sm: 12, md: 12 }}
                  sx={{
                    background: "rgb(33, 38, 49)",
                  }}
                >
                  <Grid
                    size={{ xs: 12, sm: 12, md: 12 }}
                    sx={{ color: "whitesmoke" }}
                  >
                    {datas.days.map((day, index) => (
                      <Grid
                        container
                        size={{ xs: 12, sm: 12, md: 12 }}
                        key={day.id}
                        spacing={2}
                        sx={{
                          justifyContent: "flex-start",
                          alignItems: "center",
                          mb: "20px",
                        }}
                      >
                        <Grid item size={{ xs: 2, sm: 2, md: 2 }}>
                          <Typography
                            variant="caption"
                            // sx={{ marginLeft: "50px" }}
                          >
                            <Typography>{day.label}</Typography>
                          </Typography>
                        </Grid>
                        <Grid item size={{ xs: 10, sm: 10, md: 10 }}>
                          <BorderLinearProgress
                            variant="determinate"
                            value={day.value}
                            sx={{ mb: "2px" }}
                            colorValue={"FF0000"}
                          />
                          <BorderLinearProgress
                            variant="determinate"
                            value={day.value1}
                            colorValue={"#228B22"}
                          />
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <Grid container spacing={2} sx={{ marginTop: "18px" }}>
                  <Grid size={{ xs: 6, sm: 6, md: 6 }}>
                    <Box sx={{
                        // marginLeft: "50px",
                        mb: "15px",
                        boederLeftWidth: "55px",
                        borderLeftColor: "#EF5350",
                        borderLeftStyle: 'solid',
                        paddingLeft:'15px'
                      }}>
                      <Typography variant="body1" sx={{ color: "whitesmoke" }}>
                      <strong>Profile View</strong>
                      </Typography>
                      <Typography variant="h6" sx={{ color: "whitesmoke" }}>
                      <strong>50</strong>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6, sm: 6, md: 6 }}>
                    <Box sx={{
                        // marginLeft: "50px",
                        mb: "15px",
                        boederLeftWidth: "55px",
                        borderLeftColor: "#FFA726",
                        borderLeftStyle: 'solid',
                        paddingLeft:'15px'
                      }}>
                      <Typography variant="body1" sx={{ color: "whitesmoke" }}>
                      <strong>Companys</strong>
                      </Typography>
                      <Typography variant="h6" sx={{ color: "whitesmoke" }}>
                      <strong>40</strong>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid
                  size={{ xs: 12, sm: 12, md: 12 }}
                  sx={{ color: "whitesmoke" }}
                >
                  {datas.demographics.map((demographics, index) => (
                    <Grid
                      container
                      //  spacing={2}
                      //  direction="column"
                      sx={{
                        // justifyContent: "center",
                        // alignItems: "center",
                        mb: "20px",
                        mt: "9px",
                        background: "rgb(33, 38, 49)",
                      }}
                    >
                      <Grid
                        container
                        direction="row"
                        size={{ xs: 12, sm: 12, md: 12 }}
                      >
                        <Grid item size={{ xs: 12, sm: 12, md: 6 }}>
                          <Typography>{demographics.label}</Typography>
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 12, md: 6 }}>
                          <Typography style={{ textAlign: "right" }}>
                            {demographics.value}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                        <BorderLinearProgress
                          variant="determinate"
                          value={demographics.value}
                        />
                      </Grid>
                    </Grid>
                  ))}
                </Grid>

                <Grid
                  size={{ xs: 12, sm: 12, md: 12 }}
                  sx={{ color: "whitesmoke", mt: "43px" }}
                >
                  {datas.sources.map((source, index) => (
                    <Grid
                      container
                      sx={{
                        mb: "20px",
                        background: "rgb(33, 38, 49)",
                      }}
                    >
                      <Grid
                        container
                        direction="row"
                        size={{ xs: 12, sm: 12, md: 12 }}
                      >
                        <Grid item size={{ xs: 12, sm: 12, md: 6 }}>
                          <Typography>{source.label}</Typography>
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 12, md: 6 }}>
                          <Typography style={{ textAlign: "right" }}>
                            {source.value}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                        <BorderLinearProgress
                          variant="determinate"
                          value={source.value}
                        />
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 12, md: 12 }}>
              <Box
                sx={{
                  background: "rgb(33, 38, 49)",
                  padding: "15px",
                }}
              >
                <TableContainer sx={{ color: "white", p: 2 }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          LinkedIn Users
                        </TableCell>
                        <TableCell
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          Country
                        </TableCell>
                        <TableCell
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          Usage
                        </TableCell>
                        <TableCell
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          Payment Method
                        </TableCell>
                        <TableCell
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          Activity
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {usersData.map((user, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Box display="flex" alignItems="center">
                              <Avatar
                                src={user.avatar}
                                alt={user.name}
                                sx={{ mr: 2 }}
                              />
                              <Box sx={{ color: "white" }}>
                                <Typography>{user.name}</Typography>
                                <Typography variant="body2" color="gray">
                                  {user.status}
                                </Typography>
                              </Box>
                            </Box>
                          </TableCell>
                          <TableCell sx={{ color: "white" }}>
                            {user.country}
                          </TableCell>
                          <TableCell>
                            <Box display="flex" alignItems="center">
                              <Typography
                                sx={{ mr: 2, color: "white" }}
                              >{`${user.usage.value}%`}</Typography>
                              <Typography variant="body2" color="gray">
                                {user.period}
                              </Typography>
                            </Box>
                            <StyledLinearProgress
                              variant="determinate"
                              value={user.usage.value}
                              color={user.usage.color}
                              style={{ width: "100%", height: "4px" }}
                            />
                          </TableCell>
                          <TableCell sx={{ color: "gray" }}>
                            {user.paymentMethod}
                          </TableCell>
                          <TableCell>
                            <Box sx={{ color: "gray" }}>
                              <Typography>{user.Login}</Typography>
                              <Typography variant="body2" color="white">
                                {user.activity}
                              </Typography>
                            </Box>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Body;

const services = [
  {
    id: 1,
    title: "FaceBook",
    Frinds: "3k",
    Feed: "890",
    follows: "Friends",
    message: "Feeds",

    image:
      "https://images.newscientist.com/wp-content/uploads/2020/10/19151049/19-oct_facebook-ai.jpg", // Replace with actual image URL
  },
  {
    id: 2,
    title: "X",
    Frinds: "35",
    Feed: "450",
    follows: "FOLLOWERS",
    message: "TWEETS",

    image:
      "https://www.pngall.com/wp-content/uploads/5/Black-X-Letter-PNG-Image.png", // Replace with actual image URL
  },
  {
    id: 3,
    title: "LinkedIn",
    Frinds: "5k",
    Feed: "1450",
    follows: "CONTACTS",
    message: "FEEDS",

    image:
      "https://www.interhacktives.com/wp-content/uploads/2023/03/LINKEDIN-1.jpg", // Replace with actual image URL
  },
  {
    id: 4,
    title: "FaceBook",
    Frinds: "33",
    Feed: "4",
    follows: "EVENTS",
    message: "MEETINGS",

    image:
      "https://t3.ftcdn.net/jpg/03/82/84/50/360_F_382845069_f9Sg80yMYTzqdp6uPvcz33swBdi0Bowh.jpg", // Replace with actual image URL
  },
];

const data = [
  {
    id: 1,
    title: "FaceBook",
    Ammount: "26K",
    Percentage: "(-12.4%)",
    text: "User",
    image: "download (3).png", // Replace with actual image URL
    color: "rgb(98, 97, 204)",
  },
  {
    id: 2,
    title: "X",
    Ammount: "2k",
    Percentage: "(4.9%)",
    text: "Connections",
    image: "download2.png", // Replace with actual image URL
    color: "rgb(36, 149, 66)",
  },
  {
    id: 3,
    title: "LinkedIn",
    Ammount: "2.49K",
    Percentage: "(84.7%)",
    text: "Conversion Rate",
    image: "download (4).png", // Replace with actual image URL
    color: "rgb(237, 173, 33)",
  },
  {
    id: 4,
    title: "FaceBook",
    Ammount: "44K",
    Percentage: "(-23.6%)",
    text: "Sessions",
    image: "download.png", // Replace with actual image URL
    color: "rgb(219, 93, 93)",
  },
];

const datas = {
  days: [
    { label: "Monday", id: 1, blue: 40, red: 60, value: 50, value1: 80 },
    { label: "Tuesday", id: 2, blue: 30, red: 70, value: 40, value1: 60 },
    { label: "Wednesday", id: 3, blue: 20, red: 80, value: 60, value1: 80 },
    { label: "Thursday", id: 4, blue: 50, red: 50, value: 20, value1: 70 },
    { label: "Friday", id: 5, blue: 25, red: 75, value: 70, value1: 60 },
    { label: "Saturday", id: 6, blue: 35, red: 65, value: 80, value1: 75 },
    { label: "Sunday", id: 7, blue: 45, red: 55, value: 30, value1: 90 },
  ],
  demographics: [
    { label: "Male", value: 53, color: "#FFA726" },
    { label: "Female", value: 43, color: "#FFCC80" },
  ],
  sources: [
    { label: "Organic Search", value: 56, count: 191235, color: "#66BB6A" },
    { label: "Facebook", value: 15, count: 51223, color: "#42A5F5" },
    { label: "Twitter", value: 11, count: 37564, color: "#29B6F6" },
    { label: "LinkedIn", value: 80, count: 27319, color: "#AB47BC" },
  ],
};
const usersData = [
  {
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQGk_XqnWuaRKA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721886177922?e=1746057600&v=beta&t=O8Q0gseIfyF9q3WDzA0a100K2GYevEYv3S3f6xPb3Jc",
    name: "K Dhana Sri",
    status: "New | Registered: Jun 1, 2021",
    country: "INDIA",
    usage: { value: 50, color: "#66BB6A" },
    period: "Jun 11, 2023 - Jul 10, 2027",
    paymentMethod: "Mastercard",
    Login: "Last Login",
    activity: "10 sec ago",
  },
  {
    avatar: "https://w0.peakpx.com/wallpaper/215/1/HD-wallpaper-ntr-ntr.jpg",
    name: "P Naresh",
    status: "Recurring | Registered: Jan 1, 2023",
    country: "INDIA",
    usage: { value: 22, color: "#42A5F5" },
    period: "Jun 11, 2023 - Jul 10, 2023",
    paymentMethod: "Visa",
    Login: "Last Login",
    activity: "5 minutes ago",
  },
  {
    avatar:
      "https://media.licdn.com/dms/image/v2/D5635AQEahxUUeE2Jog/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1714628118549?e=1740996000&v=beta&t=M_QJxxUXr4UFWz9RVPWy4-CzZjOpEvHw4hc-Mo_Q2I8",
    name: "M Yugandhra",
    status: "New | Registered: Jan 1, 2023",
    country: "INDIA",
    usage: { value: 74, color: "#FFA726" },
    period: "Jun 11, 2023 - Jul 10, 2023",
    paymentMethod: "Stripe",
    Login: "Last Login",
    activity: "1 hour ago",
  },
  {
    avatar:
      "https://media.licdn.com/dms/image/v2/D5635AQGbDV68qjkPiw/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1707716959787?e=1740996000&v=beta&t=ipKc0Q7LOTESQqN06yUXJoJBavQruqsXF99yplUMlqc",
    name: "B Venkatesh",
    status: "New | Registered: Jan 1, 2023",
    country: "INDIA",
    usage: { value: 98, color: "#EF5350" },
    period: "Jun 11, 2023 - Jul 10, 2023",
    paymentMethod: "PayPal",
    Login: "Last Login",
    activity: "Last min...",
  },
];
