import "../src/dist/styles.css";
import "../src/dist/index.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
// import TestimonialsPage from "./Pages/TestimonialsPage";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import SignUp from "./Pages/SignUp";
import Summary from './Pages/Summary';
import Chat from "./Pages/chats";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="Chat" element={<Chat />} />
        <Route path="Summary" element={<Summary />} />
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        {/* <Route path="testimonials" element={<TestimonialsPage />} /> */}
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signUp" element={<SignUp />} />

      </Routes>
    </>
  );
}

export default App;
