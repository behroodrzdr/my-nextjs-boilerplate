import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAuth } from '../types';

const initialState: TAuth = {
  accessToken: '',
  user: {
    firstName: '',
    lastName: '',
    name: '',
    email: '',
    mobile: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateAccessToken: (state, { payload }: PayloadAction<TAuth>) => {
      return payload;
    },
    setLogout: state => {
      return initialState;
    },
  },
});

export const { updateAccessToken, setLogout } = userSlice.actions;

export default userSlice.reducer;
