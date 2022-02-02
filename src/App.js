import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import logo from "./logo.png";
import Nav from "./Nav";
import Footer from "./Footer";

const allCategories = ["todos", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "todos") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <>
        <Nav />   
        <main>
        <section className="menu section">
            <Categories
            categories={categories}
            activeCategory={activeCategory}
            filterItems={filterItems}
            />
            <Menu items={menuItems} />
        </section>
        </main>
        <Footer/>
    </>
  );
};

export default App;
