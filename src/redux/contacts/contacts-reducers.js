import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter, logOutAction } from '../contacts/contacts-actions';
import {
  getAllContacts,
  addContacts,
  deleteContacts,
} from './contacts-operations';

const items = createReducer([], {
  [getAllContacts.fulfilled]: (_, { payload }) => payload,
  [addContacts.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [logOutAction]: (state, { payload }) => [],
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [getAllContacts.pending]: () => true,
  [getAllContacts.fulfilled]: () => false,
  [getAllContacts.rejected]: () => false,
  [addContacts.pending]: () => true,
  [addContacts.fulfilled]: () => false,
  [addContacts.rejected]: () => false,
  [deleteContacts.pending]: () => true,
  [deleteContacts.fulfilled]: () => false,
  [deleteContacts.rejected]: () => false,
});
const error = createReducer(null, {
  [addContacts.rejected]: (_, { payload }) => payload,
  [addContacts.rejected]: (_, { payload }) => payload,
  [deleteContacts.rejected]: (_, { payload }) => payload,
});
export default combineReducers({
  items,
  filter,
  isLoading,
});
