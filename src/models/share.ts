import { Effect, Reducer } from "umi";
import { message } from "antd";
import { submitShare } from "@/services/api";

export interface ShareModelState {
  shareHistory: any[];
}

export interface ShareModelType {
  namespace: "share";
  state: ShareModelState;
  effects: {
    submitShare: Effect;
  };
  reducers: {
    saveShareHistory: Reducer<ShareModelState>;
  };
}

const ShareModel: ShareModelType = {
  namespace: "share",
  state: {
    shareHistory: [],
  },
  effects: {
    *submitShare({ payload }: any, { call, put }: any): Generator {
      try {
        const response = yield call(submitShare, payload);
        yield put({
          type: "saveShareHistory",
          payload: response,
        });
        message.success("分享成功");
      } catch (error) {
        message.error("分享失败");
      }
    },
  },
  reducers: {
    saveShareHistory(
      state: ShareModelState = { shareHistory: [] },
      { payload }: any
    ) {
      return {
        ...state,
        shareHistory: [...state.shareHistory, payload],
      };
    },
  },
};

export default ShareModel;
