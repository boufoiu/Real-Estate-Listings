import {Routes, Route} from "react-router-dom"
import Connect from "./Components/Forms/Connect";
import CreateAccount from "./Components/Forms/CreateAccount";
import LandingPage from "./Components/Landing page/LandingPage";
import "./styles//App.css"

function App() {

   return (
    <Routes>
      <Route path={'/'} element = {<LandingPage/>}/>
      <Route path={'/sign-in'} element = {<CreateAccount/>}/>
      <Route path={'/connect'} element = {<Connect/>}/>
    </Routes>
  );
}

export default App;
