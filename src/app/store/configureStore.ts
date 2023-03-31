import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { newsSlice } from "../../components/newsCatalog/newsSlice";
import { displayModeSlice } from "../../components/home/displayModeSlice";


// export function ConfigureStore() {
//     return createStore(counterReducer);

// }

export const store = configureStore({
    reducer: {
        displayMode: displayModeSlice.reducer,
        news: newsSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;