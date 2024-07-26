// src/pages/HomePage.js
import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("all");

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await axios.get('/notes/', {
                    params: {
                        title: title,
                        category: category !== 'all' ? category : null
                    }
                });
                setNotes(response.data);
            } catch (error) {
                console.error('Error fetching notes', error);
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

        fetchCategories();
        fetchNotes();
    }, [title, category]);

    return (
        <div className="p-4">
            <div className="mb-4 p-4 flex items-center justify-center w-full">
                <div className="p-4 w-full max-w-xl h-auto shadow-lg rounded-lg flex gap-4">
                    <input
                        type="text"
                        placeholder="Search by title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border p-2 mb-4 w-full"
                    />
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border p-2 mb-4 w-full"
                    >
                        <option value="all">All Categories</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>
                
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {notes.map(note => (
                    <Link key={note.id} to={`/notes/${note.id}`} className="border p-4 my-4 rounded shadow">
                        <h2 className="font-bold my-3">{note.title}</h2> 
                        <hr />
                        <p className="text-gray-500">{note.content.slice(0, 100)}...</p>
                    </Link>     
                ))}
            </div>
        </div>
    );
};

export default HomePage;
