import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";

import Splash from "./views/Splash";
import Setup from "./views/Setup";
import Home from "./views/Home";
import Setting from "./views/Setting";

function App() {
  return (
    <div className="bg-onyx-900 shadow-massive-2 relative h-[37pc] flex flex-col overflow-hidden w-[22pc] border-blue-500d border-onyx-600 border-[1px]d rounded-xl.">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="setup" element={<Setup />} />
          <Route path="home" element={<Home />}>
            <Route path="send" />
            <Route path="receive" />
          </Route>
          <Route path="setting" element={<Setting />}>
            <Route path="general" />
            <Route path="advanced" />
            <Route path="securityPrivacy" />
            <Route path="contacts" />
            <Route path="networks" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
