import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AxiosError } from "axios";

axios.defaults.baseURL =
  "https://62e65af1de23e263792af968.mockapi.io/api/stars-numbers";

interface IContactData {
  id: string;
  name: string;
  number: string;
  favorites: boolean;
}

interface IKnownError {
  message: string;
  response?: {
    status?: number;
    data: string;
    statusText: string;
  };
}

export const fetchAllContacts = createAsyncThunk<
  IContactData[],
  undefined,
  { rejectValue: IKnownError }
>("contacts/GET_ALL", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get("/contacts?sortBy=name");
    console.log("> ~ res", res);
    return res.data as IContactData[];
  } catch (err) {
    const error: AxiosError<IKnownError> = err as any;

    if (!error.response) {
      throw error.message;
    }
    return rejectWithValue(error.response.data);
  }
});

interface IFormData {
  name: string;
  number: string;
}

export const addContact = createAsyncThunk<
  IContactData,
  IFormData,
  { rejectValue: IKnownError }
>("contacts/ADD", async ({ name, number }, { rejectWithValue }) => {
  try {
    const newContact = {
      name,
      number,
      favorites: false,
    };
    const res = await axios.post("/contacts", newContact);
    return res.data as IContactData;
  } catch (err) {
    const error: AxiosError<IKnownError> = err as any;

    if (!error.response) {
      throw error.message;
    }
    return rejectWithValue(error.response.data);
  }
});

export const deleteContact = createAsyncThunk<
  IContactData,
  string,
  { rejectValue: IKnownError }
>("contacts/DELETE", async (id, { rejectWithValue }) => {
  try {
    const res = await axios.delete(`/contacts/${id}`);
    return res.data as IContactData;
  } catch (err) {
    const error: AxiosError<IKnownError> = err as any;

    if (!error.response) {
      throw error.message;
    }
    return rejectWithValue(error.response.data);
  }
});

interface IFavorite {
  id: string;
  favorites: boolean;
}

export const toggleFavorit = createAsyncThunk<
  IContactData,
  IFavorite,
  { rejectValue: IKnownError }
>("contacts/TOGGLE", async ({ id, favorites }, { rejectWithValue }) => {
  try {
    const updateContact = {
      favorites: !favorites,
    };
    const res = await axios.put(`/contacts/${id}`, updateContact);
    return res.data as IContactData;
  } catch (err) {
    const error: AxiosError<IKnownError> = err as any;

    if (!error.response) {
      throw error.message;
    }
    return rejectWithValue(error.response.data);
  }
});

// export const deleteContact = createAsyncThunk<
// IContactData,
// string
// >(
//   "contacts/DELETE",
//   async (contactId: string, { rejectWithValue }) => {
//     try {
//       await axios.delete(`/contacts/${contactId}`);
//       return contactId;
//     } catch (error: any) {
//       if (!error.response) {
//         throw error;
//       }
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const toggleFavoritContact = createAsyncThunk(
//   "contacts/TOGGLE",
//   async (
//     { id, favorites }: { id: string; favorites: string },
//     { rejectWithValue }
//   ) => {
//     try {
//       const updateContact = { favorites };
//       const res = await axios.put(`/contacts/${id}`, updateContact);
//       return res.data;
//     } catch (error: any) {
//       if (!error.response) {
//         throw error;
//       }
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
