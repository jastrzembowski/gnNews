import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import StartingPage from "./components/home/StartingPage";

function App() {
  
  return (
    <>
      <CssBaseline />
        <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/news" element={<Home/>}/>
        </Routes>
 
    </>
  );
}

export default App;
