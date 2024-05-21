import React, { useEffect, useMemo } from "react";
import "./HomePage.css";
import MultipleItemsCarousel from "../../components/MultiItemCarousel/MultiItemCarousel";
import RestaurantCard from "../../components/RestarentCard/RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurantsAction } from "../../../State/Customers/Restaurant/restaurant.action";

const HomePage = () => {
  const dispatch = useDispatch();
  
  // Memoize the selector function
  const selectedState = useMemo(() => (store) => ({
    auth: store.auth,
    restaurant: store.restaurant,
  }), []);

  // Use the memoized selector
  const { auth, restaurant } = useSelector(selectedState);

  useEffect(() => {
    if (auth.user) {
      dispatch(getAllRestaurantsAction(localStorage.getItem("jwt")));
    }
  }, [auth.user]);

  return (
    <div className="">
      <section className="-z-50 banner relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p class="text-2xl lg:text-7xl font-bold z-10 py-5 text-yellow-300">
            Beauty <span class="text-customColor">Swift</span>
          </p>
          <p className="z-10    text-xl lg:text-2xl">
            Welcome at Beauty Swift, where we empower you to discover and embrace your unique journey, tailored just for you.
          </p>
        </div>
        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadout"></div>
      </section>
      <section className="p-10 lg:py-10 lg:px-20">
        <div className="">
          <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
            Top Services
          </p>
          <MultipleItemsCarousel />
        </div>
      </section>
      <section className="px-5 lg:px-20">
        <div className="">
          <h1 className="text-2xl font-semibold text-gray-400 py-3 ">
            Book your Appointment for Salon and Spa
          </h1>
          <div className="flex flex-wrap items-center justify-around ">
            {restaurant.restaurants.map((item, i) => (
              <RestaurantCard key={i} data={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
