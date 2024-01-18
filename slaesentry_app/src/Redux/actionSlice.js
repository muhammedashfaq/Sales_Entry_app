
import { createSlice } from '@reduxjs/toolkit';

const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    numbers: 100,
    rows: [
      {
        srNo: 1,
        itemCode: 'Microsoft Corporation',
        itemName: '14 Jan 2022',
        qty: '01 Feb 2022',
        amount: '$15,792',
      },
    ],
  },
  reducers: {
    addRow: (state) => {
      state.rows.push({
        srNo: state.rows.length + 1,
        itemCode: '',
        itemName: '',
        qty: '',
        amount: '',
      });
    },
    deleteRow: (state, action) => {
      const srNoToDelete = action.payload;
      state.rows = state.rows.filter(row => row.srNo !== srNoToDelete);
    },
    saveToDatabase: (state) => {
      // Replace the console.log with your actual API call or database interaction
      console.log('Saving to database:', state.rows);
    },
  },
});

export const { addRow, saveToDatabase ,deleteRow } = detailsSlice.actions;
export default detailsSlice.reducer;
