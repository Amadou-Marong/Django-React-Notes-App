import { useState } from 'react';
import axios from '../api/axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddCategoryForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/categories/', { name });
            navigate('/categories');
            toast.success('Category added successfully');
        } catch (error) {
            console.error('Error adding category:', error);
            toast.error('Error adding category');
        }
    };

    return (
        

    <div className="p-4 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="p-4 w-full max-w-xl h-auto shadow-lg rounded-lg">
            <label className='block mb-2'>Category Name:</label>
            <input
                type="text"
                value={name}
                className="border p-2 mb-4 w-full"
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Category</button>
        </form>
    </div>
    );
};

export default AddCategoryForm;
