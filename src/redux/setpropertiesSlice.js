import { createSlice } from '@reduxjs/toolkit';
import PropertiesData from '../data';

const propertySlice = createSlice({
  name: 'properties',
  initialState: {
    properties: [],
    isLoading: false,
    selectedCity: 'Mumbai',
    displayedProperties: 6
  },

  reducers: {
    getPropertyFetch: (state) => {
      state.isLoading = true;
    },

    getPropertySuccess: (state, action) => {
      state.properties = action.payload;
      state.isLoading = false;
    },

    getPropertyFailure: (state) => {
      state.isLoading = false;
    },

    setSelectedCity: (state, action) => {
        state.selectedCity = action.payload;
        state.displayedProperties = 6;
      },

     loadMoreProperties:(state)=>{
        state.displayedProperties += 3;
     }
      

  },
});

export const fetchProperties = () => async (dispatch) => {
    dispatch(getPropertyFetch());

    try {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const Properties = PropertiesData;
        dispatch(getPropertySuccess(Properties)); // Pass data as an object
    } catch (error) {
        dispatch(getPropertyFailure());
    }
};

export const {
  getPropertyFetch,
  getPropertySuccess,
  getPropertyFailure,
  setSelectedCity,
  loadMoreProperties
} = propertySlice.actions;

export default propertySlice.reducer;
