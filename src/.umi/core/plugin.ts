// @ts-nocheck
import { Plugin } from "/Users/yujian/Code/web/video-router-web/node_modules/umi/node_modules/@umijs/runtime";

const plugin = new Plugin({
  validKeys: [
    "modifyClientRenderOpts",
    "patchRoutes",
    "rootContainer",
    "render",
    "onRouteChange",
    "__mfsu",
    "dva",
    "getInitialState",
    "initialStateConfig",
    "request",
  ],
});

export { plugin };
