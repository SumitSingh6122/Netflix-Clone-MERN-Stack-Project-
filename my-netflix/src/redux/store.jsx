import {configureStore} from "@reduxjs/toolkit";
import userreducer from './slice';
import moviereducer from "./movieslice";
const store =configureStore({
    reducer:{
    app:userreducer,
    movie:moviereducer
    }
});
export default store;