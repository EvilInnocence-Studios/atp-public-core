import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { theme } from "@styles/theme";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.scss";
import { Layout } from "./components/Layout";
import { config } from "@config";

const App = () => 
  <ConfigProvider theme={theme}>
    <PayPalScriptProvider options={{
      "clientId": config().paypal.clientId,
      vault: true,
    }}>
      <BrowserRouter>
        <div className={styles.app}>
          <Layout />
        </div>
      </BrowserRouter>
    </PayPalScriptProvider>
  </ConfigProvider>;

export default App
