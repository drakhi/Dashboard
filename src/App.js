import Appbar from "./Components/Appbar";
import Body from "./Components/Body";
import Experience from "./Components/Experience";
import Getintouch from "./Components/Getintouch";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";
import Sidebar from "./Components/Sidebar";
import Skills from "./Components/Skills";
import AppRoutes from './Components/Routes'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
     
     {/* <Appbar></Appbar> */}
     <Sidebar></Sidebar>
     {/* <Body></Body> */}
    {/* <Profile></Profile> */}
    {/* <Projects></Projects> */}
    {/* <Skills></Skills> */}
  {/* <Experience></Experience> */}
{/* <Getintouch></Getintouch> */}

{/* <BrowserRouter>   
          <Routes>
          <Route path="/" component={Body} />
            <Route path="/body" component={Body} />
            <Route path="/Experience" component={Experience} />
            <Route path="/getintouch" component={Getintouch} />
            <Route path="/profile" component={Profile} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />

          </Routes>
      </BrowserRouter> */}
      {/* <Router>
      <Routes>
        <Route path="/" element={<Body />} />
      </Routes>
    </Router> */}
   </BrowserRouter>
    </>
  
  );
}

export default App;
