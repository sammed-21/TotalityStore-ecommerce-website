import React from "react";

const Footer = () => {
  return (
    <div className=" w-full mt-[40%]  border-t-2 bg-gray-100 border-gray-200">
      <div className=" p-24 ">
        <div className=" flex flex-col md:flex-row gap-10 w-full">
          <div className="flex-1">
            <h1 className="font-semibold text-xl">Categories</h1>
            <div className="flex flex-col items-start text-gray-500">
              <span>Women</span>
              <span>Men</span>
              <span>Shoe</span>
              <span>Accessories</span>
              <span>New Arrivals</span>
            </div>
          </div>
          <div className="flex-1">
            {" "}
            <h1 className="font-semibold text-xl">Links</h1>
            <div className="flex flex-col items-start text-gray-500">
              <span>FAQ</span>
              <span>Pages</span>
              <span>Stores</span>
              <span>Compare</span>
            </div>
          </div>
          <div className="flex-1">
            {" "}
            <h1 className="font-semibold text-xl">About</h1>
            <span className="text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              assumenda perferendis consequuntur iste dolor aspernatur,
              recusandae accusamus voluptate necessitatibus obcaecati?
            </span>
          </div>
          <div className="flex-1">
            {" "}
            <h1 className="font-semibold text-xl">Contact</h1>
            <span className="text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              assumenda perferendis consequuntur iste dolor aspernatur,
              recusandae accusamus voluptate necessitatibus obcaecati?
            </span>
          </div>
        </div>
        <div className="flex mt-10 items-center gap-10">
          <span className="text-2xl font-bold">Totality</span>
          <span className="text-md font-semibold text-gray-600 justify-center">Copyright &copy; 2023</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
