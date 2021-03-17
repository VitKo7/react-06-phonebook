export const handleInput = item => ({
  type: 'contacts/handleInput',
  payload: item,
});

export const createContact = contact => ({
  type: 'contacts/createContact',
  payload: contact,
});

export const handleRemove = id => ({
  type: 'contacts/handleRemove',
  payload: id,
});
