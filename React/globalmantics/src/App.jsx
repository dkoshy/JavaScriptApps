import { useCallback, useState } from "react";
import Banner from "./components/Banner";
import ErrorBoundary from "./components/ErrorBoundary";
import navValues from "./Navigations/NavValues";
import navigationContext from "./Navigations/NavigationContext";
import ComponentPicker from  "./components/ComponentPicker"
import "./App.css";

function App() {
  const navigate = useCallback(
    (navTo, param) => setNav({ current: navTo, param, navigate }),
    [],
  );

  const [nav, setNav] = useState({ current: navValues.HouseList, navigate });

  return (
    <navigationContext.Provider value={nav}>
      <ErrorBoundary fallback="something went wrong!">
        <Banner>
          <div>Providing houses all over the world.</div>
        </Banner>
        <ComponentPicker navLocation={nav.current} />
      </ErrorBoundary>
    </navigationContext.Provider>
  );
}
export default App;
