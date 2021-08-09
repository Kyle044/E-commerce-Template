import React, { useState, useRef } from "react";
import Nav from "../Components/Nav";
import "../Css/item.css";
function Item() {
  const [state, setState] = useState({ x: 0, y: 0 });
  const [qty, setQty] = useState(1);
  const ref = useRef(null);
  const increment = () => {
    setQty(qty + 1);
  };
  const decrement = () => {
    if (qty < 1) {
    } else {
      setQty(qty - 1);
    }
  };
  const right = () => {
    setState((prev) => {
      return { ...prev, x: prev.x - 95 };
    });
    console.log(ref.current.offsetWidth);
  };
  const left = () => {
    if (state.x < 50) {
      setState((prev) => {
        return { ...prev, x: prev.x + 95 };
      });
      console.log(ref.current.offsetWidth);
    }
  };
  return (
    <div>
      <Nav />
      <div className="grid gap-6 lg:grid-cols-2 w-full mt-4">
        {/**|====================================================== |
         * |             Picture
         * |====================================================== |
         */}

        <div className="text-center h-auto flex flex-col slec">
          <div className="h-auto flex justify-center items-center ">
            <img
              className="w-auto max-h-96 rounded"
              src="images/images.jpg"
              alt=""
            />
          </div>
          <div className="overflow-hidden relative w-4/5 mx-auto">
            <svg
              onClick={() => {
                right();
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute right-3 top-14 z-10 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
            <svg
              onClick={() => {
                left();
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute left-2 top-14  z-10 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
            <div
              className=" h-28 flex  w-auto mt-3 ml-3 transition ease-out duration-500 "
              style={{ transform: `translate(${state.x}px, ${state.y}px)` }}
              ref={ref}
            >
              <img
                className="w-28 h-28 mx-4 transition ease-out duration-500 wes cursor-pointer rounded"
                src="images/images.jpg"
                alt=""
              />
              <img
                className="w-28 h-28 mx-4 transition ease-out duration-500 wes cursor-pointer rounded"
                src="images/images.jpg"
                alt=""
              />
              <img
                className="w-28 h-28 mx-4 transition ease-out duration-500 wes cursor-pointer rounded"
                src="images/images2.jpg"
                alt=""
              />
              <img
                className="w-28 h-28 mx-4 transition ease-out duration-500 wes cursor-pointer rounded"
                src="images/images.jpg"
                alt=""
              />
              <img
                className="w-28 h-28 mx-4 transition ease-out duration-500 wes cursor-pointer rounded"
                src="images/images.jpg"
                alt=""
              />
              <img
                className="w-28 h-28 mx-4 transition ease-out duration-500 wes cursor-pointer rounded"
                src="images/images.jpg"
                alt=""
              />
              <img
                className="w-28 h-28 mx-4 transition ease-out duration-500 wes cursor-pointer rounded"
                src="images/images.jpg"
                alt=""
              />
              <img
                className="w-28 h-28 mx-4 transition ease-out duration-500 wes cursor-pointer rounded"
                src="images/images.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/**|====================================================== |
         * |           Name
         * |====================================================== |
         */}
        <div className="h-auto flex flex-col items-center justify-evenly">
          <div className="w-5/6 text-center">
            <h1>Product Name</h1>
            <p>Brand Name</p>
            <br />
            <p>Ratings</p>
          </div>
          <div className="flex  w-3/6 items-center justify-evenly">
            <p>
              Quantity <span>{qty}</span>
            </p>
            <div className="flex w-3/6 justify-evenly items-center">
              <div
                className="border-4 border-gray-400 transition ease-out duration-500 hover:border-green-400 p-2 rounded cursor-pointer slec"
                onClick={() => {
                  increment();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div
                className="border-4 border-gray-400 transition ease-out duration-500 hover:border-green-400 p-2 rounded cursor-pointer slec"
                onClick={() => {
                  decrement();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H4"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div></div>

          <div className="flex w-3/6 justify-evenly">
            <div className="border-4 border-gray-400 transition ease-out duration-500 hover:border-green-400 p-2 rounded cursor-pointer slec">
              <h3>Buy Now </h3>
            </div>
            <div className="border-4 border-gray-400 transition ease-out duration-500 hover:border-green-400 p-2 rounded cursor-pointer slec">
              <h3>Add to Cart</h3>
            </div>
          </div>
        </div>
        {/**|====================================================== |
         * |         Description
         * |====================================================== |
         */}
        <div className="text-center h-auto rounded border-2 shadow-lg m-3 lg:ml-3">
          <h1 className="p-3">Description</h1>
          <div className="h-auto rounded border-2 shadow-lg p-4 m-4">
            <h3 className="text-left mb-4 border-b-2 pb-2 font-bold">Header</h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              aspernatur est iure numquam porro consequatur nisi sed minima
              tempore rerum.
            </p>
          </div>
          <div className="h-auto rounded border-2 shadow-lg p-4 m-4">
            <h3 className="text-left mb-4 border-b-2 pb-2 font-bold">Header</h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              aspernatur est iure numquam porro consequatur nisi sed minima
              tempore rerum.
            </p>
          </div>
          <div className="h-auto rounded border-2 shadow-lg p-4 m-4">
            <h3 className="text-left mb-4 border-b-2 pb-2 font-bold">Header</h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              aspernatur est iure numquam porro consequatur nisi sed minima
              tempore rerum.
            </p>
          </div>
        </div>
        {/**|====================================================== |
         * |         Specification
         * |====================================================== |
         */}
        <div className="text-center h-auto rounded border-2 shadow-lg m-3 lg:mr-3">
          <h1 className="p-3">Specification</h1>
          <div className="h-auto rounded border-2 shadow-lg p-4 m-4">
            <h3 className="text-left mb-4 border-b-2 pb-2 font-bold">Header</h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              aspernatur est iure numquam porro consequatur nisi sed minima
              tempore rerum.
            </p>
          </div>
          <div className="h-auto rounded border-2 shadow-lg p-4 m-4">
            <h3 className="text-left mb-4 border-b-2 pb-2 font-bold">Header</h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              aspernatur est iure numquam porro consequatur nisi sed minima
              tempore rerum.
            </p>
          </div>
          <div className="h-auto rounded border-2 shadow-lg p-4 m-4">
            <h3 className="text-left mb-4 border-b-2 pb-2 font-bold">Header</h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              aspernatur est iure numquam porro consequatur nisi sed minima
              tempore rerum.
            </p>
          </div>
        </div>
      </div>
      {/**|====================================================== |
       * |         Reviews
       * |====================================================== |
       */}
      <div className="text-center h-auto rounded border-2 shadow-lg m-3">
        <h1 className="p-3">Reviews</h1>
        <div className="h-auto rounded border-2 shadow-lg p-4 m-4">
          <h3 className="text-left mb-4 border-b-2 pb-2 font-bold">Header</h3>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            aspernatur est iure numquam porro consequatur nisi sed minima
            tempore rerum.
          </p>
        </div>
        <div className="h-auto rounded border-2 shadow-lg p-4 m-4">
          <h3 className="text-left mb-4 border-b-2 pb-2 font-bold">Header</h3>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            aspernatur est iure numquam porro consequatur nisi sed minima
            tempore rerum.
          </p>
        </div>
        <div className="h-auto rounded border-2 shadow-lg p-4 m-4">
          <h3 className="text-left mb-4 border-b-2 pb-2 font-bold">Header</h3>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            aspernatur est iure numquam porro consequatur nisi sed minima
            tempore rerum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
