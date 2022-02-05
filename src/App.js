import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ApolloContextProvider from "./context/ApolloContext";
import { AuthContextProvider } from "./context/AuthContext";
import AboutUs from "./screen/AboutUs";
import Courses from "./screen/Courses";
import Enroll from "./screen/Enroll";
import Home from "./screen/Home";
import Login from "./screen/Login";
import Upload from "./screen/Upload";

function App() {
  return (
    <AuthContextProvider>
      <ApolloContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="courses" element={<Courses />} />
              <Route path="courses/enroll" element={<Enroll />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="login" element={<Login />} />
              <Route path="upload-course" element={<Upload />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ApolloContextProvider>
    </AuthContextProvider>
  );
}

export default App;
