import React, { useState } from 'react';
import './ItemForm.css';

function ItemForm(props) {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState(0);
  const [itemImgUrl, setItemImgUrl] = useState('');
  const [itemCategory, setItemCategory] = useState('');

  const changeName = (event) => {
    setItemName(event.target.value);
  };

  const changeDescription = (event) => {
    setItemDescription(event.target.value);
  };

  const changePrice = (event) => {
    setItemPrice(event.target.value);
  };

  const changeImgUrl = (event) => {
    setItemImgUrl(event.target.value);
  };

  const changeCategory = (event) => {
    setItemCategory(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name: itemName,
      description: itemDescription,
      price: itemPrice,
      imgUrl: itemImgUrl,
      category: itemCategory,
    };
      // eslint-disable-next-line react/destructuring-assignment,react/prop-types
    props.func(val);
    // eslint-disable-next-line no-use-before-define
    clearState();
  };

  const clearState = () => {
    setItemName('');
    setItemDescription('');
    setItemPrice(0);
    setItemImgUrl('');
    setItemCategory('');
  };

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <ul className="itemFormList">
        <li>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>NAME</label>
        </li>
        <li>
          <input type="text" placeholder="NAME" value={itemName} onChange={changeName} />
        </li>
        <li>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>DESCRIPTION</label>
        </li>
        <li>
          <input type="text" placeholder="DESCRIPTION" value={itemDescription} onChange={changeDescription} />
        </li>
        <li>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>PRICE</label>
        </li>
        <li>
          <input type="number" placeholder="PRICE" value={itemPrice} onChange={changePrice} />
        </li>
        <li>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>IMG URL</label>
        </li>
        <li>
          <input type="text" placeholder="IMG URL" value={itemImgUrl} onChange={changeImgUrl} />
        </li>
        <li>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>CATEGORY</label>
        </li>
        <li>
          <input type="text" placeholder="CATEGORY" value={itemCategory} onChange={changeCategory} />
        </li>
        <li>
          {/* eslint-disable-next-line react/button-has-type */}
          <button onClick={transferValue}>Submit</button>
        </li>
      </ul>
    </div>
  );
}

export default ItemForm;
