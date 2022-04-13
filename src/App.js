import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AddBlog } from "./pages/AddBlog";
import { Blogs } from "./pages/Blogs";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/addblog" element={<AddBlog/>} />
      </Routes>
    </div>
  );
}

export default App;
