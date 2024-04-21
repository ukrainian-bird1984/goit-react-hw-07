import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectContacts } from "./contactsSlice";

export const initialStateFilter = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialStateFilter,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

// Створення селектора для вибору фільтра за іменем
export const selectNameFilter = (state) => state.filters.name;

// Створення селектора для вибору відфільтрованих контактів
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    if (nameFilter.trim() === "") {
      return contacts;
    }
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.trim().toLowerCase())
    );
  }
);

export const filtersReducer = filtersSlice.reducer;
