import withLayout from "./Mean";
import Tabs from "../components/Tabs";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
function Home() {
  const [tablists, setTablists] = useState([
    { id: "34dfd", label: "Zall" },
    { id: "34dff", label: "Terassa" },
    { id: "34dfgh", label: "Kabina" },
  ]);
  const [currentTab, setCurrentTab] = useState(0);
  console.log(currentTab);
  return (
    <dev className="p-5 block">
      <Tabs
        onChange={(e, newValue, dssfd) => {
          setCurrentTab(newValue);
          console.log(e, dssfd);
        }}
        value={currentTab}
        data={tablists}
      />
    </dev>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default withLayout(Home);
