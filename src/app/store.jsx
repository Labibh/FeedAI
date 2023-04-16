import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import mainSlice from '../redux/mainSlice.jsx';

export default configureStore({
    reducer: {
        main: mainSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});