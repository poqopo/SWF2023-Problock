import { combineReducers } from '@reduxjs/toolkit';
import page from './Slices/page';
import user from './Slices/user';
import modal from './Slices/modal';

// 만들어 놓은 리듀서들을 합친다.
const reducer = combineReducers({
  page,
  user,
  modal,
});

// React에서 사용할 수 있도록 타입을 만들어 export 해준다.
export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
