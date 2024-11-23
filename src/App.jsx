import React, { useState } from 'react';

function ShoppingList() {
  const [itemsToBuy, setItemsToBuy] = useState(['Piim', 'Leib', 'Munad']);
  const [itemsBought, setItemsBought] = useState([]);
  const [newItem, setNewItem] = useState('');

  const checkItem = (item) => {
    setItemsToBuy(itemsToBuy.filter((i) => i !== item));
    setItemsBought([...itemsBought, item]);
  };

  const uncheckItem = (item) => {
    setItemsBought(itemsBought.filter((i) => i !== item));
    setItemsToBuy([...itemsToBuy, item]);
  };

  const addItem = (e) => {
    e.preventDefault();
    if (newItem.trim()) {
      setItemsToBuy([...itemsToBuy, newItem.trim()]);
      setNewItem('');
    }
  };

  return (
    <div>
      <h2>Vaja osta</h2>
      <ul>
        {itemsToBuy.map((item, index) => (
          <li key={index}>
            <input type="checkbox" onChange={() => checkItem(item)} />
            {item}
          </li>
        ))}
      </ul>
      <form onSubmit={addItem}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Lisa uus toode"
        />
        <button type="submit">Lisa</button>
      </form>

      <h2>Ostetud</h2>
      <ul>
        {itemsBought.map((item, index) => (
          <li key={index}>
            <input type="checkbox" checked onChange={() => uncheckItem(item)} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
