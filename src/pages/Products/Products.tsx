import React, { useState } from "react";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
 

const Products = () => {
  const catId = Number(useParams().id);

  const [isDropdownMenu, setIsDropdownMenu] = useState(false);
  // const [maxPrice, setMaxPrice] = useState(1000);
  // const [sort, setSort] = useState("");
  // const handleMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setMaxPrice(Number(e.target.value)); // Update the maxPrice state with the selected value
  // };
  // const handleSort = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSort(e.target.value);
  //   // console.log(e.target.value);
  // };
  // const handleFilterMenu = () => {
  //   setIsDropdownMenu((prev) => !prev);
  //   // console.log(isDropdownMenu);
  // };








  // const catId = Number(useParams().id);

  // State variables for filter criteria
  
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [sort, setSort] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Function to handle category selection
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedCategory = e.target.value;
    console.log(selectedCategory)
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(selectedCategory)
        ? prevCategories.filter((category) => category !== selectedCategory)
        : [...prevCategories, selectedCategory]
    );
  };
  const handleFilterMenu = () => {
    setIsDropdownMenu((prev) => !prev);
  };

  // Function to handle max price change
  const handleMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const price = Number(e.target.value);
    setMaxPrice(price);
  };

  // Function to handle sort change
  const handleSort = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedSort = e.target.value;
    setSort(selectedSort);
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
        } flex-1 max-sm:mt-4  sm:flex sm:flex-col sm:sticky sm:h-full sm:top-28 gap-10`}
      >
         <div>
          <h1 className=" font-bold">Product Categories</h1>
          <div>
            <input type="checkbox" id="men" value="men's clothing" onChange={handleCategoryChange} />
            <label htmlFor="men'23">Men</label>
          </div>
          <div>
            <input type="checkbox" id="women" value="women's clothing" onChange={handleCategoryChange} />
            <label htmlFor="women">Women</label>
          </div>
          <div>
            <input type="checkbox" id="electronics" value="electronics" onChange={handleCategoryChange} />
            <label htmlFor="electronics">Electronics</label>
          </div>
          <div>
            <input type="checkbox" id="jewelry" value="jewelery" onChange={handleCategoryChange} />
            <label htmlFor="jewelry">Jewelry</label>
          </div>
        </div>
        <div>
          <h1 className="font-bold">Filter by Price</h1>
          <div>
            <input type="range" onChange={handleMaxPrice} min={0} max={1000} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div>
          <h2 className="font-bold">Sort by</h2>
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
        <img
          className="w-full h-72 object-cover object-center  my-5"
          src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image"
        />

        <div>
          <List catId={catId} selectedCategories={selectedCategories} maxPrice={maxPrice} sort={sort} />
        </div>
      </div>
    </div>
  );
};

export default Products;
