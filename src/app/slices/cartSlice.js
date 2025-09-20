import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 🔹 Async thunk for calling FakeStore API
export const addToCartAPI = createAsyncThunk(
  "cart/addToCartAPI",
  async (product, { rejectWithValue }) => {
    try {
      const res = await fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: 1,
          date: new Date(),
          products: [
            {
              productId: product.id,
              quantity: 1,
            },
          ],
        }),
      });

      if (!res.ok) throw new Error("Failed to add to cart");
      const data = await res.json();
      return { product, apiResponse: data };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // local state for cart items
    loading: false,
    error: null,
  },
  reducers: {
    addToCartLocal: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAPI.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCartAPI.fulfilled, (state, action) => {
        state.loading = false;
        const product = action.payload.product;
        const existing = state.items.find((item) => item.id === product.id);

        if (existing) {
          existing.quantity += 1;
        } else {
          state.items.push({ ...product, quantity: 1 });
        }
      })
      .addCase(addToCartAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addToCartLocal, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
