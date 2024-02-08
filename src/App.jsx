import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landingpage from "./Pages/Landingpage";
import Loginpage from "./Pages/Loginpage";
import Signuppage from "./Pages/Signuppage";
import Homepage from "./Pages/Homepage";
import AskQuestion from "./Pages/AskQuestion";
import Tags from "./Pages/Tags";
import Users from "./Pages/Users";
import PostAnswer from "./Pages/PostAnswer";
import MyProfile from "./Pages/MyProfile";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/askquestion" element={<AskQuestion />} />
        <Route path="/users" element={<Users />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/PostAnswer/:questionId" element={<PostAnswer />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
