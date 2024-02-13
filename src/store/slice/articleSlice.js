import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
    name: 'article',
    initialState: {
        articlesData: []
    },
    reducers: {
        setArticleData: (state, { payload }) => {
            return {
                ...state,
                articlesData: payload
            }
        }
    }
})

export const { setArticleData } = articleSlice.actions;
export default articleSlice.reducer;