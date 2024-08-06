import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { toast } from "react-toastify";

const AddNotePage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('/categories/');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories', error);
            }
        };

        fetchCategories();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/notes/', { title, content, category_id: category });
            navigate('/');
            toast.success('Note added successfully');
        } catch (error) {
            console.error('Error adding note', error);
        }
    };

    return (
        <div className="p-4 flex items-center justify-center">
            <form onSubmit={handleSubmit} className="p-4 w-full max-w-xl h-auto shadow-lg rounded-lg">
                <label className="block mb-2">Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 mb-4 w-full" />
                <label className="block mb-2">Content:</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} className="border p-2 mb-4 w-full h-44" />
                <label className="block mb-2">Category:</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 mb-4 w-full">
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Note</button>
            </form>
        </div>
    );
};

export default AddNotePage;
