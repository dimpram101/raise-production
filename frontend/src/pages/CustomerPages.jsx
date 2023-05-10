import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "./Home";
import VideoEditing from "./VideoEditing";
import MakingLogo from "./makingLogo";
import MakingPoster from "./MakingPoster";
import MyOrder from "./MyOrder";

const CustomerPages = () => {

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/video-editing" element={<VideoEditing />}></Route>
          <Route path="/making-logo" element={<MakingLogo />}></Route>
          <Route path="/making-poster" element={<MakingPoster />}></Route>
          <Route path="/myorder" element={<MyOrder />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default CustomerPages;
