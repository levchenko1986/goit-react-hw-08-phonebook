import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../services/herokuapp';

export const getAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (userData, thunkAPI) => {
    try {
      const contacts = await fetchContacts();
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (contacts, thunkAPI) => {
    try {
      const contact = await addContact(contacts);
      return contact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await deleteContact(contactId);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
