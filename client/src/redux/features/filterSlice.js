import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filteredProducts: [],
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_BY_SEARCH(state, action) {
        const {products, search} = action.payload
        const tempProducts = products.filter((product) => {
            return product.name.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase())
        })

        state.filteredProducts = tempProducts
    }
  }
});

export const {FILTER_BY_SEARCH} = filterSlice.actions

export const selectFilteredProduct = (state) => state.filter.filteredProducts

export default filterSlice.reducer