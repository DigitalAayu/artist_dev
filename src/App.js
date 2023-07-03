import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from './containers/Login';
import Home from './containers/Home';
import Register from './containers/Register';
import Forgetpassword from './containers/Forgetpassword';
import Resetpassword from './containers/Resetpassword';
import ResendLink from './containers/Resend';
import Feed from './containers/Feed';
import Video from './containers/Video';
import Chat from './containers/Chat';
import Samples from './containers/Sample';
import Settings from './containers/Settings';
import Search from './containers/Search';
import Profile from './containers/Profile';
import Welcome from './containers/Welcome';
import EditProfile from './containers/EditProfile';
import Dashboard from './containers/Dashboard';
import Step2 from './containers/Step2';
import Step3 from './containers/Step3';
import Step4 from './containers/Step4';


function App() {
  return (    
    <div className="App">
      <Routes basename={'/'}>      
        
      <Route path="/" element={ <Home/> } />
      <Route path="login" element={ <Login/> } />
      <Route path="register" element={ <Register/> } />
      <Route path="forgetpassword" element={ <Forgetpassword/> } />
      <Route path="resetpassword" element={ <Resetpassword/> } />
      <Route path="user/feed" element={ <Feed/> } />
      <Route path="user/video" element={ <Video/> } />
      <Route path="user/chat" element={ <Chat/> } />
      <Route path="user/samples" element={ <Samples/> } />
      <Route path="user/settings" element={ <Settings/> } />
      <Route path="user/search" element={ <Search/> } />
      <Route path="user/profile" element={ <Profile/> } />
      <Route path="user/editprofile" element={ <EditProfile/> } />
      <Route path="user/step2" element={ <Step2/> } />
      <Route path="user/step3" element={ <Step3/> } />
      <Route path="user/dashboard" element={ <Dashboard/> } />
      <Route path="user/welcome" element={ <Welcome/> } />
      <Route path="user/step4" element={ <Step4/> } />
      <Route path="resend" element={ <ResendLink/> } />
      </Routes>
    </div>
  );
}
export default App;
