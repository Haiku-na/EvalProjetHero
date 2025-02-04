import { Routes, Route } from "react-router";
import Search from "../components/Search/Search";
import Home from "../pages/Home"; 
import NotFound from "../components/NotFound/NotFound";
import Connect from "../components/Connect/Connect";
import Introduction from "../components/Introduction/Introduction";
import Hero from "../components/Hero/Hero";
import Contact from "../components/Contact/Contact";
import { PrivateRoute } from "../auth/PrivateRoute";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Search" element={<PrivateRoute><Search /></PrivateRoute>} />
      <Route path="*" element={<NotFound />} />
      <Route path="/Connection" element={<Connect />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/hero/:id" element={<PrivateRoute><Hero /></PrivateRoute>} />
      <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
    </Routes>
  );
}
