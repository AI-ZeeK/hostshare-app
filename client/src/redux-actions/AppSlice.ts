import {
  getcategoriesApi,
  getdataApi,
  getimagesApi,
} from "@/services/AppService";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
/* eslint-disable prettier/prettier */
export interface Categories {
  id: string;
  type: string;
  title: string;
}
const pickData = [
  {
    id: 1,
    head: "Adults",
    agerange: "Ages 13 or above",
    count: 0,
  },
  {
    id: 2,
    head: "Children",
    agerange: "Ages 2-12",
    count: 0,
  },
  {
    id: 3,
    head: "Infants",
    agerange: "Under 2",
    count: 0,
  },
  {
    id: 4,
    head: "Pets",
    count: 0,
    link: "Bringing a service animal?",
  },
];
export interface Images {
  type: string;
  data: any[];
  mainData: any;
}
const categories: Categories[] = [];
const data: any[] = [];
const images: Images[] = [];
const mainData: any = {};
const openCal = false;
const openCal2 = false;
const openPicker = false;
interface initialTypes {
  categories: Categories[];
  data: any[];
  images: Images[];
  mainData: any;
  anyweekbar: boolean;
  pickData: any[];
  openCal: boolean;
  openCal2: boolean;
  openPicker: boolean;
}
const initialState: initialTypes = {
  categories,
  data,
  images,
  mainData,
  pickData,
  openCal,
  openCal2,
  openPicker,
  anyweekbar: false,
};

export const getdata = createAsyncThunk("get/data", async (_, thunkAPI) => {
  try {
    return getdataApi();
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
export const getimages = createAsyncThunk("get/images", async (_, thunkAPI) => {
  try {
    return getimagesApi();
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
export const getcategories = createAsyncThunk(
  "get/categories",
  async (_, thunkAPI) => {
    try {
      return getcategoriesApi();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const AppSlice = createSlice({
  name: "app-slice",
  initialState,
  reducers: {
    setanyweekbar: (state) => {
      state.anyweekbar = !state.anyweekbar;
    },
    setMainData: (state, {payload}) => {
      state.mainData = payload;
    },
    addPickCount: (state, {payload}) => {
      const newpickData = state.pickData.map((data) =>
        payload.id === data.id ? {...data, count: data.count + 1} : {...data}
      );
      console.log(12, payload);
      state.pickData = newpickData;
    },
    removePickCount: (state, {payload}) => {
      const newpickData = state.pickData.map((data) =>
        payload.id === data.id ? {...data, count: data.count - 1} : {...data}
      );
      console.log(34, payload);

      state.pickData = newpickData;
    },
    setOpenCal2: (state) => {
      state.openCal = false;
      state.openPicker = false;
      state.openCal2 = true;
    },
    setOpenCal: (state) => {
      state.openPicker = false;
      state.openCal2 = false;
      state.openCal = true;
    },
    setOpenPicker: (state) => {
      state.openCal = false;
      state.openCal2 = false;
      state.openPicker = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getcategories.fulfilled, (state, {payload}) => {
      state.categories = payload;
    });
    builder.addCase(getdata.fulfilled, (state, {payload}) => {
      state.data = payload;
    });
    builder.addCase(getimages.fulfilled, (state, {payload}) => {
      state.images = payload;
    });
  },
});
export const {
  setanyweekbar,
  setOpenCal2,
  setOpenCal,
  setOpenPicker,
  setMainData,
  addPickCount,
  removePickCount,
} = AppSlice.actions;
export default AppSlice.reducer;
