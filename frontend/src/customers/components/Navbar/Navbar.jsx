import React, { useState } from "react";
import "./Navbar.css";
import PersonIcon from "@mui/icons-material/Person";
import {
  Avatar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import Auth from "../../pages/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../State/Authentication/Action";
import { pink } from "@mui/material/colors";


const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const cartItemsCount = useSelector((state) => state.cart.cartItems.length);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const navigateToCart = () => {
    navigate("/cart");
  };

  const navigateToProfile = () => {
    user?.role === "ROLE_ADMIN" || user?.role === "ROLE_RESTAURANT_OWNER"
      ? navigate("/admin/restaurant")
      : navigate("/my-profile");
  };

  const handleCloseAuthModel = () => {
    navigate("/");
  };
  const navigateToHome = () => {
    navigate("/");
  };

  const handleLogout = () => {
    dispatch(logout());
    handleCloseMenu();
  };

  return (
    <div className="px-5 z-50 py-[.8rem] bg-[#B0E0E6] lg:px-20 flex justify-between">
      <div className="flex items-center space-x-4">
        <div
          onClick={navigateToHome}
          className="lg:mr-10 cursor-pointer flex items-center space-x-4"
        >
<img className="img" src="https://media.licdn.com/dms/image/D560BAQGUYOVc8LFh7g/company-logo_200_200/0/1712577156824?e=1724284800&v=beta&t=CkLsLEA2VhFXu3faXJoYi_qoEeT_HDrJkII-kuAmGTY" alt="Company Logo"/>
<ul>
  <li className="logo font-semibold text-yellow-300 text-3xl">
    Beauty <span className="text-customColor">Swift</span>
  </li>
</ul>

        </div>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        {/* <div>
          <IconButton onClick={() => navigate("/search")}>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div> */}
        <div className="flex items-center space-x-2">
          {user?.fullName ? (
            <span
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={
                user?.role === "ROLE_ADMIN"
                  ? handleOpenMenu
                  : navigateToProfile
              }
              className="font-semibold cursor-pointer"
            >
              <Avatar sx={{ bgcolor: "white", color: pink.A400 }}>
                {user.fullName[0].toUpperCase()}
              </Avatar>
            </span>
          ) : (
            <IconButton onClick={() => navigate("/account/login")}>
              <PersonIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          )}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() =>
                user?.role === "ROLE_ADMIN"
                  ? navigate("/admin")
                  : navigate("/super-admin")
              }
            >
              Profile
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>

        {/* <IconButton onClick={navigateToCart}>
          <Badge color="black" badgeContent={cartItemsCount}>
            <ShoppingCartIcon className="text-4xl" sx={{ fontSize: "2rem" }} />
          </Badge>
        </IconButton> */}
      </div>

      <Auth handleClose={handleCloseAuthModel} />
    </div>
  );
};

export default Navbar;
