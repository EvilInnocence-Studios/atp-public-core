import { theme } from "@styles/theme";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.scss";
import { Layout } from "./components/Layout";

const App = () => 
<ConfigProvider theme={theme}>
  <BrowserRouter>
    <div className={styles.app}>
      <Layout />
    </div>
  </BrowserRouter>
</ConfigProvider>;

export default App
