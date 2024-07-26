// src/pages/EditNotePage.js
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios";

const EditNotePage = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const response = await axios.get(`/notes/${id}/`);
                const note = response.data;
                setTitle(note.title);
                setContent(note.content);
                setCategory(note.category);
            } catch (error) {
                console.error('Error fetching note', error);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await axios.get('/categories/');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories', error);
            }
        };

        fetchNote();
        fetchCategories();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/notes/${id}/`, { title, content, category_id: category });
            navigate('/');
        } catch (error) {
            console.error('Error updating note', error);
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
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update Note</button>
            </form>
        </div>
    );
};

export default EditNotePage;
