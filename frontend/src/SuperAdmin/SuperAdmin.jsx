// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import SuperAdminSidebar from "./SuperAdminSideBar";
// import SuperAdminCustomerTable from "./SuperAdminCustomerTable/SuperAdminCustomerTable";
// import Customers from "./SuperAdminCustomerTable/Customers";
// //import RestaurantTable from "./Restaurants/RestaurantTable";
// import SuperAdminRestaurant from "./Restaurants/SuperAdminRestaurant";
// //import RestaurantRequest from "./RestaurantRequest/RestaurantRequest";
// // import AdminDashboard from "./Dashboard/AdminDashboard";
// // import AdminSidebar from "./AdminSidebar";
// // import RestaurantDashboard from "./Dashboard/RestaurantDashboard";
//  //import RestaurantsOrder from "./Orders/RestaurantsOrder";
// // import RestaurantsMenu from "./MenuItem/RestaurantsMenu";
// // import AddMenuForm from "./AddMenu/AddMenuForm";
// //import CreateRestaurantForm from "./AddRestaurants/CreateRestaurantForm";
// import SuperAdminDashboard from "./SuperAdminDashboard/SuperAdminDashboard";
// import RestaurantTable from "./Restaurants/RestaurantTable";
// import RestaurantRequest from "./RestaurantRequest/RestaurantRequest";

// const SuperAdmin = () => {
//   return (
//     <div className="lg:flex justify-between">
//       <div className="">
//       <SuperAdminDashboard/>
       
//        <RestaurantTable/>
       
//        <RestaurantTable/>
//        <RestaurantRequest/>
      
       
//         {/* <SuperAdminSidebar /> */}
//       </div>

//       <div className="w-[80vw]">
//         <Routes>
//           <Route path="/customers" element={<Customers/>}></Route>
//           <Route path="/restaurants" element={<SuperAdminRestaurant/>}></Route>
//           <Route path="/restaurant-request" element={<RestaurantRequest/>}></Route>
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default SuperAdmin;
import React from 'react'

import "./Superadmin.css";
import {Space} from "antd";
import Header from './Components/Header/Header';
import SideMenu from './Components/SideMenu/SideMenu';
import PageContact from './Components/PageContent/PageContact';
import Footer from './Components/Footer/Footer';

const SuperAdmin = () => {
  return (
    <div className="App">
     <Header/>
       <Space className='SideMenuAndPageContent'>
           <SideMenu></SideMenu>
           <PageContact></PageContact>
       </Space>
       <Footer/>
  </div>
  )
}

export default SuperAdmin;
