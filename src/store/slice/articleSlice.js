import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
    name: 'article',
    initialState: {
        articlesData: [],
        loading: false,
        error: null,
        selectedArticle: null
    },
    reducers: {
        setArticleData: (state, { payload }) => {
            return {
                ...state,
                articlesData: payload
            }
        },
        setLoading: (state, { payload }) => {
            return {
                ...state, 
                loading: payload
            }
        },
        setError: (state, { payload }) => {
            return {
                ...state, 
                error: payload
            }
        },
        setselectedArticle: (state, { payload }) => {
            return {
                ...state, 
                selectedArticle: payload
            }
        }
    }
})

export const { setArticleData, setLoading, setError, setselectedArticle} = articleSlice.actions;
export default articleSlice.reducer;