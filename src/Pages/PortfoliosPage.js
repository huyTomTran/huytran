import React from "react";
import Categories from "../Components/Categories";
import Title from "../Components/Title";
import MenuItems from "../Components/MenuItems";
import Portfolios from "../Components/AllPorfolios";
import { useState } from "react";

//  this will return ALL categories by using Set to get the unique item
const allCategories = [
  "All",
  ...new Set(Portfolios.map((item) => item.category)),
];
// console.log(allCategories);

function PortfoliosPage() {
  const [categories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(Portfolios);

  const filter = (category) => {
    //  this will return all category
    if (category === "All") {
      setMenuItems(Portfolios);
      return;
    }
    //  this will return by each category
    const filteredData = Portfolios.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filteredData);
  };

  return (
    <div className="PortfoliosPage">
      <div className="title">
        <Title title={"Portfolios"} span={"Portfolios"} />
      </div>
      <div className="portfolios-data">
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
}

export default PortfoliosPage;
