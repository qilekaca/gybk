import navbar from "./configs/navbar";
import sidebar from "./configs/sidebar";
import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";

export default defineUserConfig({
  lang: "zh-CN",
  title: "广缘百科",
  description: "做一家无愧于心的商店",
  theme: defaultTheme({
    logo: "/images/logo.png",
    navbar,
    sidebar,
  }),
});
