import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import agent from "../../app/api/agent";

import { RootState } from "../../app/store/configureStore";
import { News, Response } from "../../app/models/news";

interface NewsState {
  dataLoaded: boolean;
  appStatus: string;
  metaData: string;
  apiKey: string;
  status: string;
  totalResults: number;
  articles: News[]
}

const newsAdapter = createEntityAdapter<Response>({selectId: (response: Response)=> response.articles.publishedAt});

function getAxiosParams(apiKey: string, metaData: string) {
  const params = new URLSearchParams();
  params.append("country", metaData.toString());
  params.append("apiKey", apiKey.toString());
  return params;
}

export const fetchNewsAsync = createAsyncThunk<
  Response,
  void,
  { state: RootState }
>("news/fetchNewsAsync", async (_, thunkAPI) => {
  const params = getAxiosParams(
    thunkAPI.getState().news.apiKey,
    thunkAPI.getState().news.metaData.toString()
  );
  try {
    const response: Response = await agent.Catalog.list(params);
    return response;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.data });
  }
});

export const newsSlice = createSlice({
  name: "news",
  initialState: newsAdapter.getInitialState<NewsState>({
    dataLoaded: false,
    appStatus: "idle",
    metaData: "pl",
    apiKey: "3a9362f7311640318fd796d15824d204",
    status: "",
    totalResults: 0,
    articles: {} as News[]

  }),
  reducers: {
    setMetaData: (state, action) => {
      state.metaData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNewsAsync.pending, (state) => {
      state.appStatus = "pendingFetchCharacters";
    });
    builder.addCase(fetchNewsAsync.fulfilled, (state, action) => {
      newsAdapter.setOne(state, action.payload);
      state.appStatus = "idle";
      state.dataLoaded = true;
    });
    builder.addCase(fetchNewsAsync.rejected, (state, action) => {
      console.log(action);
      state.appStatus = "idle";
      state.dataLoaded = false;
    });
  },
});

export const newsSelectors = newsAdapter.getSelectors(
  (state: RootState) => state.news
);
export const { setMetaData } = newsSlice.actions;
