import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  console.log(items)

  const [selected, setSelected ] = useState("All");

  function handleCategoryChange(event) {
    setSelected(event.target.value)
  }

  const itemsFilter = items.filter((item) => {
    if (selected === "All") return true;

    return item.category === selected
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <ul className="Items">
        {itemsFilter.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
