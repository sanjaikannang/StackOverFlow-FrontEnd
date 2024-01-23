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
        <Route exact path="/login" element={<Loginpage />} />
        <Route exact path="/signup" element={<Signuppage />} />
        <Route exact path="/homepage" element={<Homepage />} />
        <Route exact path="/askquestion" element={<AskQuestion />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/tags" element={<Tags />} />
        <Route exact path="/PostAnswer/:questionId" element={<PostAnswer />} />
        <Route exact path="/myprofile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
