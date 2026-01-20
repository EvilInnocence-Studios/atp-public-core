import { Setting } from "@common/components/Setting";
import { useSetting } from "@common/lib/setting/services";
import { ScrollToTop } from "@core/components/ScrollToTop";
import { overridable } from "@core/lib/overridable";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Layout } from "@theming/components/Layout";
import { useTheme } from "@theming/lib/useTheme";
import { LoginModal } from "@uac/components/LoginModal";
import { useLoginForm } from "@uac/lib/useLoginForm";
import { ConfigProvider } from "antd";
import Favicon from 'react-favicon';
import { BrowserRouter } from "react-router-dom";

const App = overridable(() => {
  const clientId = useSetting("paypalClientId");
  const logoUrl = useSetting("siteLogoUrl");
  const theme = useTheme();
  const loginModal = useLoginForm();

  return clientId ? <ConfigProvider theme={theme}>
    {!!logoUrl && <Favicon url={logoUrl || undefined} />}
    <PayPalScriptProvider options={{
      clientId,
      vault: true,
    }}>
      <LoginModal modal={loginModal} />
      {/* This is a hidden input field to stop the browser from autofilling the search field in the header*/}
      <div style={{ width: 0, position: "absolute", right: 999999, top: 0 }}>
        <input />
        <input type="password" />
      </div>
      <title><Setting id="siteName" /></title>
      <BrowserRouter>
        <div className="app">
          <Layout element="layout"/>
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </PayPalScriptProvider>
  </ConfigProvider> : null;
});

export default App
