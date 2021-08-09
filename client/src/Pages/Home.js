import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { withRouter } from "react-router-dom";
function Home({ history }) {
  return (
    <div>
      <Nav />
      <h1 className="border-b-4 border-gray-300 w-11/12 m-auto mb-8 p-4">
        Popular
      </h1>
      {/**|====================================================== |
       * |             Card Container
       * |====================================================== |
       */}
      <div className="grid gap-6 w-11/12 m-auto grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
        {/**|====================================================== |
         * |             Card
         * |====================================================== |
         */}
        <div
          className=" flex flex-col h-auto w-52 rounded-lg m-auto overflow-hidden shadow hover:shadow-lg cursor-pointer  justify-center"
          onClick={() => {
            history.push("/Item");
          }}
        >
          <img className="w-full max-h-64" src="images/images.jpg" alt="" />
          <div className="flex flex-col  justify-center items-center p-3">
            <h4 className="text-s w-full text-center mb-4">Item Name</h4>
            <h4 className="text-xs w-full text-center mb-4">Price</h4>
            <h4 className="text-xs w-full text-center mb-4">Stock Status</h4>
          </div>
        </div>
        <div
          className=" flex flex-col h-auto w-52 rounded-lg m-auto overflow-hidden shadow hover:shadow-lg cursor-pointer  justify-center"
          onClick={() => {
            history.push("/Item");
          }}
        >
          <img className="w-full max-h-64" src="images/images.jpg" alt="" />
          <div className="flex flex-col  justify-center items-center p-3">
            <h4 className="text-s w-full text-center mb-4">Item Name</h4>
            <h4 className="text-xs w-full text-center mb-4">Price</h4>
            <h4 className="text-xs w-full text-center mb-4">Stock Status</h4>
          </div>
        </div>
        <div
          className=" flex flex-col h-auto w-52 rounded-lg m-auto overflow-hidden shadow hover:shadow-lg cursor-pointer  justify-center"
          onClick={() => {
            history.push("/Item");
          }}
        >
          <img className="w-full max-h-64" src="images/images.jpg" alt="" />
          <div className="flex flex-col  justify-center items-center p-3">
            <h4 className="text-s w-full text-center mb-4">Item Name</h4>
            <h4 className="text-xs w-full text-center mb-4">Price</h4>
            <h4 className="text-xs w-full text-center mb-4">Stock Status</h4>
          </div>
        </div>
        <div
          className=" flex flex-col h-auto w-52 rounded-lg m-auto overflow-hidden shadow hover:shadow-lg cursor-pointer  justify-center"
          onClick={() => {
            history.push("/Item");
          }}
        >
          <img className="w-full max-h-64" src="images/images.jpg" alt="" />
          <div className="flex flex-col  justify-center items-center p-3">
            <h4 className="text-s w-full text-center mb-4">Item Name</h4>
            <h4 className="text-xs w-full text-center mb-4">Price</h4>
            <h4 className="text-xs w-full text-center mb-4">Stock Status</h4>
          </div>
        </div>
      </div>
      <br />

      <h1 className="border-b-4 border-gray-300 w-11/12 m-auto mt-4 mb-8 p-4 ">
        Category
      </h1>
      <div className="grid gap-6 w-11/12 h-auto m-auto grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  p-8 ">
        <div
          onClick={() => {
            history.push("/Category");
          }}
          className="flex flex-col h-40 p-4 justify-evenly  border-gray-800 items-center border-4 shadow-lg cursor-pointer transition ease-out duration-500 hover:border-green-300"
        >
          <h2 className="text-s">Category One</h2>
          <p className="text-xs text-center">No of Products</p>
        </div>
        <div
          onClick={() => {
            history.push("/Category");
          }}
          className="flex flex-col h-40 p-4 justify-evenly  border-gray-800 items-center border-4 shadow-lg cursor-pointer transition ease-out duration-500 hover:border-green-300"
        >
          <h2 className="text-s">Category One</h2>
          <p className="text-xs text-center">No of Products</p>
        </div>
        <div
          onClick={() => {
            history.push("/Category");
          }}
          className="flex flex-col h-40 p-4 justify-evenly  border-gray-800 items-center border-4 shadow-lg cursor-pointer transition ease-out duration-500 hover:border-green-300"
        >
          <h2 className="text-s">Category One</h2>
          <p className="text-xs text-center">No of Products</p>
        </div>
        <div
          onClick={() => {
            history.push("/Category");
          }}
          className="flex flex-col h-40 p-4 justify-evenly  border-gray-800 items-center border-4 shadow-lg cursor-pointer transition ease-out duration-500 hover:border-green-300"
        >
          <h2 className="text-s">Category One</h2>
          <p className="text-xs text-center">No of Products</p>
        </div>
        <div
          onClick={() => {
            history.push("/Category");
          }}
          className="flex flex-col h-40 p-4 justify-evenly  border-gray-800 items-center border-4 shadow-lg cursor-pointer transition ease-out duration-500 hover:border-green-300"
        >
          <h2 className="text-s">Category One</h2>
          <p className="text-xs text-center">No of Products</p>
        </div>
        <div
          onClick={() => {
            history.push("/Category");
          }}
          className="flex flex-col h-40 p-4 justify-evenly  border-gray-800 items-center border-4 shadow-lg cursor-pointer transition ease-out duration-500 hover:border-green-300"
        >
          <h2 className="text-s">Category One</h2>
          <p className="text-xs text-center">No of Products</p>
        </div>
        <div
          onClick={() => {
            history.push("/Category");
          }}
          className="flex flex-col h-40 p-4 justify-evenly  border-gray-800 items-center border-4 shadow-lg cursor-pointer transition ease-out duration-500 hover:border-green-300"
        >
          <h2 className="text-s">Category One</h2>
          <p className="text-xs text-center">No of Products</p>
        </div>
      </div>
      <h1 className="border-b-4 border-gray-300 w-11/12 m-auto mb-8 p-4">
        New Uploads
      </h1>
      {/**|====================================================== |
       * |             Card Container
       * |====================================================== |
       */}
      <div className="grid gap-6 w-11/12 m-auto grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
        {/**|====================================================== |
         * |             Card
         * |====================================================== |
         */}
        <div
          className=" flex flex-col h-auto w-52 rounded-lg m-auto overflow-hidden shadow hover:shadow-lg cursor-pointer  justify-center"
          onClick={() => {
            history.push("/Item");
          }}
        >
          <img className="w-full max-h-64" src="images/images.jpg" alt="" />
          <div className="flex flex-col  justify-center items-center p-3">
            <h4 className="text-s w-full text-center mb-4">Item Name</h4>
            <h4 className="text-xs w-full text-center mb-4">Price</h4>
            <h4 className="text-xs w-full text-center mb-4">Stock Status</h4>
          </div>
        </div>
        <div
          className=" flex flex-col h-auto w-52 rounded-lg m-auto overflow-hidden shadow hover:shadow-lg cursor-pointer  justify-center"
          onClick={() => {
            history.push("/Item");
          }}
        >
          <img className="w-full max-h-64" src="images/images.jpg" alt="" />
          <div className="flex flex-col  justify-center items-center p-3">
            <h4 className="text-s w-full text-center mb-4">Item Name</h4>
            <h4 className="text-xs w-full text-center mb-4">Price</h4>
            <h4 className="text-xs w-full text-center mb-4">Stock Status</h4>
          </div>
        </div>
        <div
          className=" flex flex-col h-auto w-52 rounded-lg m-auto overflow-hidden shadow hover:shadow-lg cursor-pointer  justify-center"
          onClick={() => {
            history.push("/Item");
          }}
        >
          <img className="w-full max-h-64" src="images/images.jpg" alt="" />
          <div className="flex flex-col  justify-center items-center p-3">
            <h4 className="text-s w-full text-center mb-4">Item Name</h4>
            <h4 className="text-xs w-full text-center mb-4">Price</h4>
            <h4 className="text-xs w-full text-center mb-4">Stock Status</h4>
          </div>
        </div>
        <div
          className=" flex flex-col h-auto w-52 rounded-lg m-auto overflow-hidden shadow hover:shadow-lg cursor-pointer  justify-center"
          onClick={() => {
            history.push("/Item");
          }}
        >
          <img className="w-full max-h-64" src="images/images.jpg" alt="" />
          <div className="flex flex-col  justify-center items-center p-3">
            <h4 className="text-s w-full text-center mb-4">Item Name</h4>
            <h4 className="text-xs w-full text-center mb-4">Price</h4>
            <h4 className="text-xs w-full text-center mb-4">Stock Status</h4>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default withRouter(Home);
