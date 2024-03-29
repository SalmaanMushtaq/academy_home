import Courses from "./components/courses/Courses";
import Navbar from "./components/navbar/Navbar";
import CourseOffered from "./components/courseOffered/CourseOffered";
import Events from "./components/event/Events";
import LearnMore from "./components/learnMore/LearnMore";
import Manifesto from "./components/manifesto/Manifesto";
import Testomonials from "./components/testomonials/Testomonials";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Courses />
      <LearnMore />
      <CourseOffered />
      <Manifesto />
      <Events />
      <Testomonials />
      <Footer />
    </>
  );
}

export default App;
