import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BasePage from "./components/BasePage";
import Home from "./components/Home";
import Components from "./components/Components";
import About from "./components/About";
import ListBooks from "./components/Components/ListBooks/src/ListBooks";
import WeatherFinish from "./components/Components/Weather/src/Weather";
import SliderFinish from "./components/Components/Slider/src/SliderFinish";
import RegForm from "./components/Components/RegistrationForm/src/RegestrationForm";
import NotFoundPage from "./components/Components/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path="components/*" element={<Components />} />
          <Route path="about" element={<About />} />
          <Route path="components/listbooks" element={<ListBooks />} />
          <Route path="components/weather" element={<WeatherFinish />} />
          <Route path="components/slider" element={<SliderFinish />} />
          <Route path="components/regform" element={<RegForm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
