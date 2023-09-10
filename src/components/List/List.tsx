import React from 'react'

import Card from "../Card/Card";
import { data1, ListProps  } from "../../utils/types";

const List:React.FC<ListProps> = ({catId,maxPrice,sort}) => {
  console.log(catId);
  console.log(maxPrice);
  console.log(sort)
  return (
    <div className="w-full h-auto ">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data1.map((item) => (
          <Card
                key={item.id}
                id={item.id}
            img={item.img}
            title={item.title}
            oldPrice={item.oldPrice}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default List