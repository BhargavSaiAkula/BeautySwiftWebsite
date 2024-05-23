// import {
//   Avatar,
//   AvatarGroup,
//   Backdrop,
//   Box,
//   Button,
//   Card,
//   CardHeader,
//   Chip,
//   CircularProgress,
//   Menu,
//   MenuItem,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
// } from "@mui/material";

// import React, { useEffect, useState } from "react";

// import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchRestaurantsOrder,
//   updateOrderStatus,
// } from "../../State/Admin/Order/restaurants.order.action";
// // import {
// //   confirmOrder,
// //   deleteOrder,
// //   deliveredOrder,
// //   getOrders,
// //   shipOrder,
// // } from "../../state/Admin/Order/Action";

// const orderStatus = [
//   { label: "Pending", value: "PENDING" },
//   { label: "Completed", value: "COMPLETED" },
//   { label: "Out For Delivery", value: "OUT_FOR_DELIVERY" },
//   { label: "Delivered", value: "DELIVERED" },
// ];

// const OrdersTable = ({ isDashboard, name }) => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ status: "", sort: "" });
//   const dispatch = useDispatch();
//   const jwt = localStorage.getItem("jwt");
//   const { restaurantsOrder } = useSelector((store) => store);
//   const [anchorElArray, setAnchorElArray] = useState([]);
//   const { id } = useParams();

//   const handleUpdateStatusMenuClick = (event, index) => {
//     const newAnchorElArray = [...anchorElArray];
//     newAnchorElArray[index] = event.currentTarget;
//     setAnchorElArray(newAnchorElArray);
//   };

//   const handleUpdateStatusMenuClose = (index) => {
//     const newAnchorElArray = [...anchorElArray];
//     newAnchorElArray[index] = null;
//     setAnchorElArray(newAnchorElArray);
//   };

//   const handleUpdateOrder = (orderId, orderStatus, index) => {
//     handleUpdateStatusMenuClose(index);
//     dispatch(updateOrderStatus({ orderId, orderStatus,jwt }));
//   };

//   // console.log("restaurants orders store ", restaurantsOrder)

//   return (
//     <Box>
//       <Card className="mt-1">
//         <CardHeader
//           title={name}
//           sx={{
//             pt: 2,
//             alignItems: "center",
//             "& .MuiCardHeader-action": { mt: 0.6 },
//           }}
//         />
//         <TableContainer>
//           <Table sx={{}} aria-label="table in dashboard">
//             <TableHead>
//               <TableRow>
//               <TableCell>Id</TableCell>
//                 <TableCell>Image</TableCell>
//                 {/* {!isDashboard && <TableCell>Title</TableCell>} */}
//                 <TableCell>Customer</TableCell>
//                 <TableCell>Price</TableCell>
             
//                 <TableCell>Name</TableCell>
//                 {!isDashboard && <TableCell>Ingredients</TableCell>}
//                 {!isDashboard &&<TableCell>Status</TableCell>}
//                 {!isDashboard && (
//                   <TableCell sx={{ textAlign: "center" }}>Update</TableCell>
//                 )}
//                 {/* {!isDashboard && (
//                   <TableCell sx={{ textAlign: "center" }}>Delete</TableCell>
//                 )} */}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {restaurantsOrder.orders
//                 ?.slice(0, isDashboard ? 7 : restaurantsOrder.orders.length)
//                 .map((item, index) => (
//                   <TableRow
//                     className="cursor-pointer"
//                     hover
//                     key={item._id}
//                     sx={{
//                       "&:last-of-type td, &:last-of-type th": { border: 0 },
//                     }}
//                   >
//                     <TableCell>{item?._id}</TableCell>
//                     <TableCell sx={{}}>
//                       <AvatarGroup max={4} sx={{ justifyContent: "start" }}>
//                         {item.items.map((orderItem) => (
//                           <Avatar
//                             alt={orderItem.food?.name}
//                             src={orderItem.food?.images[0]}
//                           />
//                         ))}
//                       </AvatarGroup>{" "}
//                     </TableCell>

//                     <TableCell sx={{}}>
//                       {item?.customer.email}
//                     </TableCell>

//                     <TableCell>₹{item?.totalAmount}</TableCell>
                    
//                     <TableCell className="">
//                       {item.items.map((orderItem) => (
//                         <p>
//                           {orderItem.food?.name}
//                         </p>
//                       ))}
//                     </TableCell>
//                   {!isDashboard &&  <TableCell className="space-y-2">
//                       {item.items.map((orderItem) =>
//                       <div className="flex gap-1 flex-wrap">
//                        { orderItem.ingredients?.map((ingre) => (
//                           <Chip label={ingre} />
//                         ))}
//                       </div>
                        
//                       )}
//                     </TableCell>}
//                     {!isDashboard &&<TableCell className="text-white">
//                       <Chip
//                         sx={{
//                           color: "white !important",
//                           fontWeight: "bold",
//                           textAlign: "center",
//                         }}
//                         label={item?.orderStatus}
//                         size="small"
//                         color={
//                           item.orderStatus === "PENDING"
//                             ? "info"
//                             : item?.orderStatus === "DELIVERED"
//                             ? "success"
//                             : "secondary"
//                         }
//                         className="text-white"
//                       />
//                     </TableCell>}
//                     {!isDashboard && (
//                       <TableCell
//                         sx={{ textAlign: "center" }}
//                         className="text-white"
//                       >
//                         <div>
//                           <Button
//                             id={`basic-button-${item?._id}`}
//                             aria-controls={`basic-menu-${item._id}`}
//                             aria-haspopup="true"
//                             aria-expanded={Boolean(anchorElArray[index])}
//                             onClick={(event) =>
//                               handleUpdateStatusMenuClick(event, index)
//                             }
//                           >
//                             Status
//                           </Button>
//                           <Menu
//                             id={`basic-menu-${item?._id}`}
//                             anchorEl={anchorElArray[index]}
//                             open={Boolean(anchorElArray[index])}
//                             onClose={() => handleUpdateStatusMenuClose(index)}
//                             MenuListProps={{
//                               "aria-labelledby": `basic-button-${item._id}`,
//                             }}
//                           >
//                             {orderStatus.map((s) => (
//                               <MenuItem
//                                 onClick={() =>
//                                   handleUpdateOrder(item._id, s.value, index)
//                                 }
//                               >
//                                 {s.label}
//                               </MenuItem>
//                             ))}
//                           </Menu>
//                         </div>
//                       </TableCell>
//                     )}
//                     {/* {!isDashboard && (
//                     <TableCell
//                       sx={{ textAlign: "center" }}
//                       className="text-white"
//                     >
//                       <Button
//                         onClick={() => handleDeleteOrder(item._id)}
//                         variant="text"
//                       >
//                         delete
//                       </Button>
//                     </TableCell>
//                   )} */}
//                   </TableRow>
//                 ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Card>
      

//       <Backdrop
//         sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={restaurantsOrder.loading}
//       >
//         <CircularProgress color="inherit" />
//       </Backdrop>
//     </Box>
//   );
// };

// export default OrdersTable;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderTable = () => {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(true);
  const formatDate = (item) => {
    const date = new Date(item.date);
    const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear().toString().slice(2)}`;
    return { ...item, date: formattedDate };
  };
  useEffect(() => {
    axios.get('http://localhost:5454/api/dummy/getData')
      .then((response) =>{ 
        console.log(response);
setLoading(false)
setData(response.data.map(formatDate))})
      .catch(err => console.log(err));
  }, []);
 console.log(data);
  if(loading){return <h1>Loading..</h1>}

  

  return (
    <div>
    <h1 className='text-2xl p-8 pl-2'>Recent Appointments </h1>
    <div className=' flex  '>
      <div className='overflow-x-auto w-full max-w-4xl'>
        <table className='min-w-full bg-white shadow-md rounded-lg overflow-hidden'>
          <thead className='bg-customBorder'>
            <tr>          
            <th className='py-2 px-4 border-b border-customBorder'>Service</th>
              <th className='py-2 px-4 border-b border-customBorder'> Customer Name</th>
              <th className='py-2 px-4 border-b border-customBorder'>Email</th>
              <th className='py-2 px-4 border-b border-customBorder'>Phone</th>
              <th className='py-2 px-4 border-b border-customBorder'>Date</th>
              <th className='py-2 px-4 border-b border-customBorder'>Time</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, index) => (
                <tr key={index} className='bg-customBackground'>
                 <td className='py-2 px-4 border-b border-customBorder text-center'>{(item?.Food?.name)?item?.Food?.name:"There is no data"}</td> 

                <td className='py-2 px-4 border-b border-customBorder text-center'>{item.name}</td>
                  <td className='py-2 px-4 border-b border-customBorder text-center'>{item.email}</td>
                  <td className='py-2 px-4 border-b border-customBorder text-center'>{item.phone}</td>
                  <td className='py-2 px-4 border-b border-customBorder text-center'>{item.date}</td>
                  <td className='py-2 px-4 border-b border-customBorder text-center'>{item.time}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default OrderTable;
