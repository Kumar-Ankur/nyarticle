import { configureStore } from "@reduxjs/toolkit";
import articleReduceer from './slice/articleSlice'

const store = configureStore({
    reducer: {
        article: articleReduceer
    }
})

export default store