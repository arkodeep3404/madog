import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Editor from "./pages/editor";

export default function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}
