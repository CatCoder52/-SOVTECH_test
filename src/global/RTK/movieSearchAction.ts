import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./store";
import { RootState } from "./rootReducer";
import Axios from "axios";
import { baseUrl } from "../baseurl";

export interface movieProps {
  title?: string;
  director?: string;
  producer?: string;
  release_date?: string;
}

export interface movieState {
  movieData: movieProps;
  isLoading: boolean;
  error: string;
}

export const initialState: movieState = {
  movieData: {},
  isLoading: false,
  error: "",
};

export const movieDataSlice = createSlice({
  name: "moive",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    setMovieData: (state, { payload }: PayloadAction<object>) => {
      state.movieData = payload;
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
  },
});

export const { setMovieData, setError, setLoading } = movieDataSlice.actions;
export const getMovieAction =
  (data: any): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const movie = await (<any>Axios.get(`${baseUrl}/films/?search=${data}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }));
      dispatch(setMovieData(movie.data.results[0]));
    } catch (error: any) {
      dispatch(setError("Something went wrong try again"));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const movieSelector = (state: RootState) => state.movieSearchAction;
export default movieDataSlice.reducer;
