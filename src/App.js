import React from "react";

import { Routes, Route } from "react-router-dom";

import AboutUs from "./templates/AboutUs";
import PostsPage from './templates/PostsPage';
import ServicesInfo from "./templates/ServicesInfo";
import PricingPost from "./templates/PricingPost";
import TeamInfo from "./templates/TeamInfo";
import BlogPost from './templates/BlogPost';
import ContactCompany from "./templates/ContactCompany";
import ErrorPage from './pages/ErrorPage';
import Layout from "./pages/Layout"

const App = () => {
  return <PostsPage/>;
  
  
// return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout/>}>
//           <Route path="/" element={<PostsPage/>}/>
//           <Route path="/about-us" element={<AboutUs/>}/>
//           <Route path="/servicing" element={<ServicesInfo/>}/>
//           <Route path="/pricing" element={<PricingPost/>}/>
//           <Route path="/team-info" element={<TeamInfo/>}/>
//           <Route path="/blog" element={<BlogPost/>}/>
//           <Route path="/contacts" element={<ContactCompany/>}/>
//           <Route path="*" element={<ErrorPage/>}/>
//         </Route>
//       </Routes>
//     </>
//   )


};

export default App;
