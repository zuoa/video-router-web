import { Effect, Reducer } from "umi";
import { fetchPublishers } from "@/services/api";

export interface Publisher {
  code: string;
  name: string;
  status: number;
  avatar: string;
}

export interface PublisherModelState {
  publishers: Publisher[];
  selectedPublishers: string[];
}

export interface PublisherModelType {
  namespace: "publisher";
  state: PublisherModelState;
  effects: {
    fetchPublishers: Effect;
  };
  reducers: {
    savePublishers: Reducer<PublisherModelState>;
    updateSelectedPublishers: Reducer<PublisherModelState>;
  };
}

const PublisherModel: PublisherModelType = {
  namespace: "publisher",
  state: {
    publishers: [],
    selectedPublishers: [],
  },
  effects: {
    *fetchPublishers(_: any, { call, put }: any): Generator {
      const publishers = (yield call(fetchPublishers)) as Publisher[];
      yield put({ type: "savePublishers", payload: publishers });

      const lastSelected = localStorage.getItem("lastSelectedPublisher");
      if (lastSelected && publishers.some((p) => p.code === lastSelected)) {
        yield put({
          type: "updateSelectedPublishers",
          payload: [lastSelected],
        });
      } else if (publishers.length > 0) {
        yield put({
          type: "updateSelectedPublishers",
          payload: [publishers[0].code],
        });
      }
    },
  },
  reducers: {
    savePublishers(
      state: PublisherModelState = { publishers: [], selectedPublishers: [] },
      { payload }: any
    ) {
      return { ...state, publishers: payload };
    },
    updateSelectedPublishers(
      state: PublisherModelState = { publishers: [], selectedPublishers: [] },
      { payload }: any
    ) {
      localStorage.setItem("lastSelectedPublisher", payload[0]);
      return { ...state, selectedPublishers: payload };
    },
  },
};

export default PublisherModel;
