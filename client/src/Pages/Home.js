import React from "react";
import Nav from "../Components/Nav";
function Home() {
  return (
    <div>
      <Nav />
      {/**|====================================================== |
       * |             Card Container
       * |====================================================== |
       */}
      <div className="flex justify-center items-center  h-1/2">
        {/**|====================================================== |
         * |             Card
         * |====================================================== |
         */}
        <div className="bg-red-400 h-auto w-52 rounded-lg mx-5 overflow-hidden">
          <img className="w-full max-h-64" src="images/images.jpg" alt="" />
          <div className="flex flex-col  justify-center items-center p-3">
            <h4 className="text-s w-full text-center mb-4">Item Name</h4>
            <div className="flex w-full  justify-evenly items-center">
              <p className="text-xs border-2 border-red-300 rounded-full p-3 cursor-pointer ">
                Buy
              </p>
              <p className="text-xs border-2 border-red-300 rounded-full p-3 cursor-pointer">
                Add to Cart
              </p>
            </div>
          </div>
        </div>
        <div className="bg-red-400 h-auto w-52 rounded-lg mx-5 overflow-hidden">
          <img className="w-full max-h-64" src="images/images.jpg" alt="" />
          <div className="flex flex-col  justify-center items-center p-3">
            <h4 className="text-s w-full text-center mb-4">Item Name</h4>
            <div className="flex w-full  justify-evenly items-center">
              <p className="text-xs border-2 border-red-300 rounded-full p-3 cursor-pointer ">
                Buy
              </p>
              <p className="text-xs border-2 border-red-300 rounded-full p-3 cursor-pointer">
                Add to Cart
              </p>
            </div>
          </div>
        </div>
        <div className="bg-red-400 h-auto w-52 rounded-lg mx-5 overflow-hidden">
          <img className="w-full max-h-64" src="images/images.jpg" alt="" />
          <div className="flex flex-col  justify-center items-center p-3">
            <h4 className="text-s w-full text-center mb-4">Item Name</h4>
            <div className="flex w-full  justify-evenly items-center">
              <p className="text-xs border-2 border-red-300 rounded-full p-3 cursor-pointer ">
                Buy
              </p>
              <p className="text-xs border-2 border-red-300 rounded-full p-3 cursor-pointer">
                Add to Cart
              </p>
            </div>
          </div>
        </div>
        <div className="bg-red-400 h-auto w-52 rounded-lg mx-5 overflow-hidden">
          <img className="w-full max-h-64" src="images/images.jpg" alt="" />
          <div className="flex flex-col  justify-center items-center p-3">
            <h4 className="text-s w-full text-center mb-4">Item Name</h4>
            <div className="flex w-full  justify-evenly items-center">
              <p className="text-xs border-2 border-red-300 rounded-full p-3 cursor-pointer ">
                Buy
              </p>
              <p className="text-xs border-2 border-red-300 rounded-full p-3 cursor-pointer">
                Add to Cart
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
