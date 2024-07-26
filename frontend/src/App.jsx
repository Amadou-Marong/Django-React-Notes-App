import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AddNotePage from "./pages/AddNotePage";
import EditNotePage from "./pages/EditNotePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import Navbar from "./components/Navbar";
import PageNotFound from "./pages/PageNotFound";
import CategoryList from "./components/CategoryList";
import AddCategoryForm from "./components/AddCategoryForm";
import CategoriesPage from "./pages/CategoriesPage";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/add" element={<AddNotePage />} />
                <Route path="/edit/:id" element={<EditNotePage />} />
                <Route path="/notes/:id" element={<NoteDetailPage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/add-category" element={<AddCategoryForm />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
