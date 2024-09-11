import { defineConfig } from "umi";

export default defineConfig({
  nodeModulesTransform: {
    type: "none",
  },
  routes: [
    { path: "/", component: "@/pages/index" },
    { path: "/publishers", component: "@/pages/publishers" },
    { path: "/history", component: "@/pages/history" },
  ],
  fastRefresh: {},
  antd: {},
  dva: {},
  proxy: {
    "/api": {
      target: "http://10.0.4.13:4090",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    },
  },
  alias: {
    "@": "/src",
  },
});
