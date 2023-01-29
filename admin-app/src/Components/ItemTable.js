import React, { useState } from 'react';
import ItemForm from './ItemForm';
import jsonItemsData from '../source/db-items.json';
// import jsonCategoryData from '../source/db-categories.json';

function ItemTable() {
  const [itemData, setItemData] = useState(jsonItemsData);

  const tableRows = itemData.map((info) => (
    // eslint-disable-next-line react/jsx-filename-extension
    <tr>
      <td>
        <img height="100" width="100" className="img-thumbnail" src={info.imgUrl} alt={info.id} />
        {info.name}
      </td>
      <td>
        Rp.
        {info.price}
      </td>
      <td>{info.categoryId}</td>
      <td>{info.authorId}</td>
    </tr>
  ));

  const addRows = (data) => {
    const totalItem = itemData.length;
    // eslint-disable-next-line no-param-reassign
    data.id = totalItem + 1;
    const updatedItemData = [...itemData];
    updatedItemData.push(data);
    setItemData(updatedItemData);
  };

  return (
    <div>
      <ItemForm func={addRows} />
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>NAME</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>CREATED BY</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default ItemTable;
