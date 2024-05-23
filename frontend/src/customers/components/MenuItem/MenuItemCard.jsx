
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Box,
  Modal
} from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../State/Customers/Cart/cart.action";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { categorizedIngredients } from "../../util/CategorizeIngredients";
import { api } from "../../../config/api";
import BookAppointment from "./BookAppiontment";

const MenuItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});
  console.log("I am in item tab")
 console.log(item)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmitAppointment = () => {
    const FormData={...formData,food:item._id,food_array
      :item.food
    }
    console.log(FormData);
    api.post("/api/dummy/postData", FormData)
      .then(response => {
        console.log(response);
        alert("Appointment confirmed");
        handleClose();
      })
      .catch(error => console.log(error));
    setFormData({});
  };

  return (
    <>
      <div className="lg:flex items-center justify-between box bg-customBackground">
        <div className="lg:flex items-center lg:space-x-5">
          <img
            className="w-[7rem] h-[7rem] object-cover"
            src={item.images[0]}
            alt={item.name}
          />
          <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
            <p className="font-semibold text-xl">{item.name}</p>
            <p>₹{item.price}</p>
            <p className="text-gray-400">{item.description}</p>
          </div>
        </div>
        <div className="bg-blue-500 text-white">
          <Button onClick={handleOpen}>Book Appointment</Button>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h1 className='text-2xl font-bold mb-4'>Book Appointment</h1>
          </Typography>
          <Typography id="modal-modal-description" sx={{ md: 10 }}>
            <BookAppointment
              formData={formData}
              setFormData={setFormData}
            />
            <Button onClick={handleSubmitAppointment}>
              Submit
            </Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default MenuItemCard;