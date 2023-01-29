import React, { useState } from 'react';
import CategoryForm from './CategoryForm';
import jsonCategoryData from '../source/db-categories.json';

function CategoryTableData() {
  const [categoryData, setCategoryData] = useState(jsonCategoryData);

  const handleDeleteClick = (itemId) => {
    const newItems = [...categoryData];

    const index = categoryData.findIndex((item) => item.id === itemId);

    newItems.splice(index, 1);

    setCategoryData(newItems);
  };

  const tableRows = categoryData.map((item) => (
    // eslint-disable-next-line react/jsx-filename-extension
    <tr>
      <td>{item.name}</td>
      <td>{item.createdAt}</td>
      <td>{item.updatedAt}</td>
      <button type="button" onClick={handleDeleteClick}>Delete</button>
    </tr>
  ));

  const getTimeStamp = () => {
    const today = new Date();
    return today.toISOString();
  };

  const addRows = (data) => {
    const totalCategory = categoryData.length;
    // eslint-disable-next-line no-param-reassign
    data.id = totalCategory + 1;
    // eslint-disable-next-line no-param-reassign
    data.createdAt = getTimeStamp();
    // eslint-disable-next-line no-param-reassign
    data.updatedAt = getTimeStamp();
    const updatedCategoryData = [...categoryData];
    updatedCategoryData.push(data);
    setCategoryData(updatedCategoryData);
  };

  return (
    <div>
      <CategoryForm func={addRows} />
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>NAME</th>
            <th>CREATED AT</th>
            <th>UPDATED AT</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default CategoryTableData;
