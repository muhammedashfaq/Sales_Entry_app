
import React from 'react';
import { useDispatch } from 'react-redux';
import { addRow, saveToDatabase } from '../Redux/actionSlice'; 

const Button = () => {
  const dispatch = useDispatch();

  const handleButtonClick = (actionType) => {
    if (actionType === 'ADD_ROW') {

      console.log("hahha");
      // Dispatch the Redux Toolkit action for adding a row
      dispatch(addRow());
    } else if (actionType === 'SAVE_TO_DATABASE') {
      // Dispatch the Redux Toolkit action for saving to the database
      dispatch(saveToDatabase());
    }else if (actionType === 'NEW_FIELD') {
      // Dispatch the Redux Toolkit action for saving to the database
      window.location.reload();    }
    // Add other conditions for other actions if needed
  };

  return (
    <div className="flex divide-x-2 rounded dark:text-gray-900 font-semibold dark:divide-gray-700">
      <button type="button" className="px-3 py-1" onClick={() => handleButtonClick('NEW_FIELD')}>
        New
      </button>

      <button type="button" className="px-3 py-1" onClick={() => handleButtonClick('ADD_ROW')}>
        Insert
      </button>
      <button type="button" className="px-3 py-1" onClick={() => handleButtonClick('SAVE_TO_DATABASE')}>
        Save
      </button>
      <button type="button" className="px-3 py-1" onClick={() => handleButtonClick('SAVE_TO_DATABASE')}>
        Print
      </button>
    </div>
  );
};

export default Button;
