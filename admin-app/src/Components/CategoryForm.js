import React, { useState } from 'react';
import './CategoryForm.css';

function CategoryForm(props) {
  const [categoryName, setCategoryName] = useState('');

  const changeName = (event) => {
    setCategoryName(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name: categoryName,
    };
      // eslint-disable-next-line react/destructuring-assignment,react/prop-types
    props.func(val);
    // eslint-disable-next-line no-use-before-define
    clearState();
  };

  const clearState = () => {
    setCategoryName('');
  };

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <ul className="categoryFormList">
        <li>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>Name</label>
        </li>
        <li>
          <input type="text" value={categoryName} onChange={changeName} />
        </li>
        <li>
          {/* eslint-disable-next-line react/button-has-type */}
          <button onClick={transferValue}>Submit</button>
        </li>
      </ul>
    </div>
  );
}

export default CategoryForm;
