import React, { useState } from "react";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";

const Products = () => {
  const catId = Number(useParams().id);

  const [isDropdownMenu, setIsDropdownMenu] = useState(false);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("");
  const handleMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value)); // Update the maxPrice state with the selected value
  };
  const handleSort = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSort(e.target.value);
    console.log(e.target.value);
  };
  const handleFilterMenu = () => {
    setIsDropdownMenu((prev) => !prev);
    console.log(isDropdownMenu);
  };
  return (
    <div className="px-8 py-10 max-sm:flex-col gap-10 sm:flex">
      {/* left side bar */}
      <button
        onClick={handleFilterMenu}
        className="sm:hidden absolute mt-6 top-[7rem] flex items-center bg-slate-400 rounded-2xl px-3 py-2"
      >
        Filter <FaAngleDown />
      </button>

      <div
        className={` ${
          isDropdownMenu ? "block " : "hidden"
        } flex-1 max-sm:mt-4  sm:flex sm:flex-col  gap-10`}
      >
        <div>
          <h2>Product Categories</h2>
          <div>
            <input type="checkbox" id="1" value="1" />
            <label htmlFor="1">Shoes</label>
          </div>
          <div>
            <input type="checkbox" id="2" value="2" />
            <label htmlFor="2">Coats</label>
          </div>
          <div>
            <input type="checkbox" id="3" value="3" />
            <label htmlFor="3">Dress</label>
          </div>
        </div>
        <div>
          <h2>Filter by Price</h2>
          <div>
            <input type="range" onChange={handleMaxPrice} min={0} max={1000} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div>
          <h2>Sort by</h2>
          <div>
            <input
              type="radio"
              id="asc"
              value="asc"
              onChange={handleSort}
              name="price"
            />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div>
            <input
              type="radio"
              id="desc"
              value="desc"
              onChange={handleSort}
              name="price"
            />
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
      </div>
      {/* right main content */}
      <div className="flex-2 justify-between w-full h-full flex flex-col ">
         
        <img className="w-full h-72 object-cover object-center  my-11"
          src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image"
          />
           
        <div>
          
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
</div>
      </div>
    </div>
  );
};

export default Products;
