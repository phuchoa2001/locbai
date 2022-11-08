import { configureStore } from '@reduxjs/toolkit';


import Card from './useCard';
export default configureStore({
    reducer: {
        Card
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})