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
    console.log(user.accessToken);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };

    return await Api.post(`createContact`, data, config)
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

export const getAllContactsThunk = createAsyncThunk(
  "contacts/getAllContacts",
  async () => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    // console.log(user.accessToken);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };

    return await Api.get(`allContacts`, config)
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
  async (id) => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    console.log(user.accessToken);
    console.log(id, "id");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };
    return await Api.patch(`editContact/${id}`, id, config)
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
  async (id) => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    console.log(user.accessToken);
    console.log(id);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };
    return await Api.delete(`/deleteContact/${id}`, id, config)
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
  reducers: {
    deleteContact: (state, action) => {
      console.log(action.payload);
      // state.contacts = state.contacts.filter((s) => {
      // return s._id!=
      // });
    },

    editContact: (state, action) => {
      console.log(action.payload);
    },
  },
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
      .addCase(getAllContactsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        if (action.payload.data.success) {
          state.isSuccess = true;
          state.contacts = action.payload.data.contacts;
        } else {
          state.isSuccess = false;
          state.isError = true;
        }
      })
      .addCase(getAllContactsThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = true;
      })

      .addCase(editContactThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        // if (action.payload.data.success) {
        //   state.isSuccess = true;
        //   // state.contacts = action.payload.data.allcontacts;
        // } else {
        //   state.isSuccess = false;
        //   state.isError = true;
        // }
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
          // state.contacts = state.contacts.filter((s) => {
          //   return s._id != action.payload.data.noteId;
          // });
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
export const { deleteContact, editContact } = contactSlice.actions;
