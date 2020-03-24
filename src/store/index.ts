import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import createLoadingPlugin from "@rematch/loading";
import createRematchPersist from "@rematch/persist";

import { models, RootModel } from "./models";
import { ormReducer } from "../orm";

const persistPlugin = createRematchPersist({
  version: 1
});

const loading = createLoadingPlugin({});

export const store = init({
  models,
  plugins: [persistPlugin, loading],
  redux: {
    reducers: {
      orm: ormReducer
    }
  }
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type iRootState = RematchRootState<RootModel>;
