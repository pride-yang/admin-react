// import './wdyr' // why-did-you-render
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
// import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as ReduxProvider } from "react-redux";
import { ConfigProvider } from "antd";

// import reportWebVitals from './reportWebVitals'
import zhCN from "antd/lib/locale/zh_CN";
import dayjs from "dayjs";
import App from "./App";
import "dayjs/locale/zh-cn";
// import enUS from 'antd/lib/locale/en_US'
dayjs.locale("zh-cn");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);

root.render(
  // <ReduxProvider store={store}>
  <ConfigProvider
    locale={zhCN}
    componentSize="middle"
    input={{ autoComplete: "off" }}
  >
    <Router>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </Router>
  </ConfigProvider>
  // </ReduxProvider>
);

// web vitals
// reportWebVitals(console.log)
