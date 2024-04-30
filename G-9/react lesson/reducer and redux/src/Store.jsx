import { createStore } from "redux";
import { Rootreducer } from "./redux/reducer/Rootreducer";

export const Store = createStore(Rootreducer)