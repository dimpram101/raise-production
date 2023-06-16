import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "./Home";
import VideoEditing from "./VideoEditing";
import MakingLogo from "./MakingLogo";
import MakingPoster from "./MakingPoster";
import MyOrder from "./MyOrder";
import MyOrderDetail from "./MyOrderDetail";
import Footer from "../Components/Landing_page/Footer";
import Profile from "./Profile";
import Gallery from "../pages/Gallery";

const CustomerPages = () => {

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/video-editing" element={<VideoEditing />}></Route>
          <Route path="/making-logo" element={<MakingLogo />}></Route>
          <Route path="/making-poster" element={<MakingPoster />}></Route>
          <Route path="/myorder" element={<MyOrder />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/myorder/:id" element={<MyOrderDetail />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default CustomerPages;
