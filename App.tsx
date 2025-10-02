import { LogoImage } from "@common/components/LogoImage";
import { Setting } from "@common/components/Setting";
import { useSetting } from "@common/lib/setting/services";
import { useTheme } from "@common/lib/useTheme";
import { ScrollToTop } from "@core/components/ScrollToTop";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ConfigProvider, Spin } from "antd";
import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.scss";
import { Layout } from "./components/Layout";
import Favicon from 'react-favicon';

Spin.setDefaultIndicator(<div className={styles.spinnerContainer}>
  <div className={styles.spinner}>&nbsp;</div>
  <LogoImage />
</div>);

const App = () => {
  const clientId = useSetting("paypalClientId");
  const logoUrl = useSetting("siteLogoUrl");
  const theme = useTheme();

  return clientId ? <ConfigProvider theme={theme}>
    {!!logoUrl && <Favicon url={logoUrl || undefined} />}
    <PayPalScriptProvider options={{
      clientId,
      vault: true,
    }}>
      <title><Setting id="siteName" /></title>
      <BrowserRouter>
        <div className={styles.app}>
          <Layout />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </PayPalScriptProvider>
  </ConfigProvider> : null;
}

export default App
