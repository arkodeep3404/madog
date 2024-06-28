import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Editor from "./pages/editor";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Editor2 from "./pages/editor2";

export default function App() {
  return (
    <div>
      <Toaster />
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/editor" element={<Editor />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/editor2" element={<Editor2 />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}
