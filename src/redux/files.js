import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchFiles = createAsyncThunk(
  'files/fetchFiles',
  async () => {
    try {
      const response = await axios.get('http://localhost:8000/files/data')
      return [...response.data]
    } catch (error) {
      console.log(error)
      return []
    }
  }
)

// Slice
const filesSlice = createSlice({
  name: 'files',
  initialState: {
    status: 'idle',
    error: null,
    data: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFiles.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(fetchFiles.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchFiles.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.error
      })
  },
});

export const selectAllFiles = (state) => state.data
export const getFilesStatus = (state) => state.status
// export const { fetchF } = filesSlice.actions
export default filesSlice.reducer;