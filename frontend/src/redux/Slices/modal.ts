/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Modal {
  status: string;
  value: string;
  id: number;
}

// slice 안에 들어갈 내용들은 매우 심플하고 직관적이다.
// name, initialState, reducers.
export const modal = createSlice({
  name: 'modal',
  initialState: { status: '', value: '', id: 0 }, // 필수로 타입 지정 안해도 되지만, 확실히 하기로 한다.
  reducers: {
    setModal(state, action: PayloadAction<Modal>) {
      state.status = action.payload.status;
      state.value = action.payload.value;
      state.id = action.payload.id;
      return state;
    },
  },
});

// 액션과 리듀서를 export 해준다. 이건 그냥 따라하면 된다.
export const { setModal } = modal.actions;
export default modal.reducer;
