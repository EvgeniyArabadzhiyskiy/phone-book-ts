import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  fetchAllContacts,
  toggleFavorit,
} from "./contacts-operations";

interface IContact {
  id: string;
  name: string;
  number: string;
  favorites: boolean;
}

interface IKnownError {
  message: string;
  response: {
    status: number;
    data: string;
    statusText: string;
  };
}

interface IContactState {
  contacts: IContact[];
  loading: boolean;
  error: IKnownError | null;
}

interface IContactData {
  id: string;
  name: string;
  number: string;
  favorites: boolean;
}

const initialState: IContactState = {
  contacts: [],
  loading: false,
  error: null,
};

const contactSlise = createSlice({
  name: "contactSlise",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        console.log("action.payload", action.payload);
        state.contacts = action.payload;
        state.loading = false;
      })

      // .addCase(
      //   fetchAllContacts.rejected,
      //   (state, action: PayloadAction<any>) => {
      //     console.log(".addCase ~ action", action.payload);
      //     state.loading = false;
      //     state.error = action.payload;
      //   }
      // )

      .addCase(
        addContact.fulfilled,
        (state, action: PayloadAction<IContactData>) => {
          state.contacts.push(action.payload);
        }
      )

      .addCase(
        deleteContact.fulfilled,
        (state, action: PayloadAction<IContactData>) => {
          state.contacts = state.contacts.filter(
            (contact) => contact.id !== action.payload.id
          );
        }
      )

      .addCase(
        toggleFavorit.fulfilled,
        (state, action: PayloadAction<IContactData>) => {
          state.contacts.forEach((contact) => {
            return contact.id === action.payload.id
              ? (contact.favorites = !contact.favorites)
              : contact;
          });
        }
      )

      .addMatcher(isError, (state, action: PayloadAction<IKnownError>) => {
        state.error = action.payload;
      });
  },
});

export default contactSlise;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
