import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import RealEstateDetailPage from "./pages/RealEstateDetailPage";
import ProfilePage from "./pages/ProfilePage";
function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/real-estate/:id" element={<RealEstateDetailPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;
