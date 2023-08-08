import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "./API.js";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  contacts: [],
  response1: "",
  response2: "",
};

export const addContactThunk = createAsyncThunk(
  "/contact/createContact",
  async (data) => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    // console.log(user.accessToken);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };

    return await Api.post(`/createContact`, data, config)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err.response;
      });
  }
);

export const editContactThunk = createAsyncThunk(
  "contacts/editContact",
  async (data) => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    // console.log(user.accessToken);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };

    return await Api.put(`/editContact`, data, config)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err.response;
      });
  }
);

export const deleteNoteThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (noteID) => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    // console.log(user.accessToken);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };
    return await Api.delete(`/deleteContact${noteID}`, noteID, config)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err.response;
      });
  }
);

export const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(addContactThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        if (action.payload.data.success) {
          state.isSuccess = true;
          state.response1 = action.payload.data.msg;
        } else {
          state.isSuccess = false;
          state.isError = true;
        }
      })
      .addCase(addContactThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = true;
      })

      .addCase(editContactThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        if (action.payload.data.success) {
          state.isSuccess = true;
          // state.contacts = action.payload.data.allcontacts;

          const note = state.contacts.findIndex(
            (n) => n._id == action.payload.data.note._id
          );
          state.contacts[note] = action.payload.data.note;
        } else {
          state.isSuccess = false;
          state.isError = true;
        }
      })
      .addCase(editContactThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = true;
      })

      .addCase(deleteNoteThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteNoteThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        if (action.payload.data.success) {
          state.isSuccess = true;
          state.contacts = state.contacts.filter((s) => {
            return s._id != action.payload.data.noteId;
          });
        } else {
          state.isSuccess = false;
          state.isError = true;
        }
      })
      .addCase(deleteNoteThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = true;
      });
  },
});

export default contactSlice.reducer;
