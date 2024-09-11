// @ts-nocheck
import { Component } from "react";
import { ApplyPluginsType } from "umi";
import dva from "dva";
// @ts-ignore
import createLoading from "/Users/yujian/Code/web/video-router-web/node_modules/dva-loading/dist/index.esm.js";
import { plugin, history } from "../core/umiExports";
import ModelPublisher0 from "/Users/yujian/Code/web/video-router-web/src/models/publisher.ts";
import ModelShare1 from "/Users/yujian/Code/web/video-router-web/src/models/share.ts";

let app: any = null;

export function _onCreate(options = {}) {
  const runtimeDva = plugin.applyPlugins({
    key: "dva",
    type: ApplyPluginsType.modify,
    initialValue: {},
  });
  app = dva({
    history,

    ...(runtimeDva.config || {}),
    // @ts-ignore
    ...(typeof window !== "undefined" && window.g_useSSR
      ? { initialState: window.g_initialProps }
      : {}),
    ...(options || {}),
  });

  app.use(createLoading());
  (runtimeDva.plugins || []).forEach((plugin: any) => {
    app.use(plugin);
  });
  app.model({ namespace: "publisher", ...ModelPublisher0 });
  app.model({ namespace: "share", ...ModelShare1 });
  return app;
}

export function getApp() {
  return app;
}

/**
 * whether browser env
 *
 * @returns boolean
 */
function isBrowser(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.document !== "undefined" &&
    typeof window.document.createElement !== "undefined"
  );
}

export class _DvaContainer extends Component {
  constructor(props: any) {
    super(props);
    // run only in client, avoid override server _onCreate()
    if (isBrowser()) {
      _onCreate();
    }
  }

  componentWillUnmount() {
    let app = getApp();
    app._models.forEach((model: any) => {
      app.unmodel(model.namespace);
    });
    app._models = [];
    try {
      // 释放 app，for gc
      // immer 场景 app 是 read-only 的，这里 try catch 一下
      app = null;
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    let app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
