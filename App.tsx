import { Analytics } from "@analytics/components/Analytics";
import { Setting } from "@common/components/Setting";
import { useSetting } from "@common/lib/setting/services";
import { ScrollToTop } from "@core/components/ScrollToTop";
import { overridable } from "@core/lib/overridable";
import { AppWrapper } from "@core/lib/providerRegistry";
import { Layout } from "@theming/components/Layout";
import Favicon from 'react-favicon';
import { BrowserRouter } from "react-router-dom";
import { useLayoutTheme } from "@theming/lib/useTheme";

const Preview = () => {
  const {theme, preview} = useLayoutTheme();
  return preview && <div style={{
    position: "fixed",
    top: 10,
    left: 10,
    background: "red",
    color: "white",
    padding: 10
}}> Preview Mode: {theme?.name}</div>
}

const App = overridable(() => {
  const logoUrl = useSetting("siteLogoUrl");

  return <>
    {!!logoUrl && <Favicon url={logoUrl || undefined} />}
    <AppWrapper>
      {/* This is a hidden input field to stop the browser from autofilling the search field in the header*/}
      <div style={{ width: 0, position: "absolute", right: 999999, top: 0 }}>
        <input />
        <input type="password" />
      </div>
      <title><Setting id="siteName" /></title>
      <BrowserRouter>
        <Preview />
        <Analytics />
        <div className="app">
          <Layout element="layout" global />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </AppWrapper>
  </>;
});

export default App
