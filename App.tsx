import { useSetting } from "@common/lib/setting/services";
import { ScrollToTop } from "@core/components/ScrollToTop";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { theme } from "@styles/theme";
import { ConfigProvider, Spin } from "antd";
import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.scss";
import { Layout } from "./components/Layout";

Spin.setDefaultIndicator(<div className={styles.spinnerContainer}>
  <div className={styles.spinner}>&nbsp;</div>
  <img src="/logo.png" />
</div>);

const App = () => {
  const clientId = useSetting("paypalClientId");

  return <ConfigProvider theme={theme}>
    <PayPalScriptProvider options={{
      clientId,
      vault: true,
    }}>
      <BrowserRouter>
        <div className={styles.app}>
          <Layout />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </PayPalScriptProvider>
  </ConfigProvider>;
}

export default App
