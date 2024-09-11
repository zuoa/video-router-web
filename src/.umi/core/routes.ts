// @ts-nocheck
import React from "react";
import { ApplyPluginsType } from "/Users/yujian/Code/web/video-router-web/node_modules/umi/node_modules/@umijs/runtime";
import * as umiExports from "./umiExports";
import { plugin } from "./plugin";

export function getRoutes() {
  const routes = [
    {
      path: "/",
      component: require("@/pages/index").default,
      exact: true,
    },
    {
      path: "/publishers",
      component: require("@/pages/publishers").default,
      exact: true,
    },
    {
      path: "/history",
      component: require("@/pages/history").default,
      exact: true,
    },
  ];

  // allow user to extend routes
  plugin.applyPlugins({
    key: "patchRoutes",
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
