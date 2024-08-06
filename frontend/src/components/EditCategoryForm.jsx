import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditCategoryForm = () => {
    const {id} = useParams();
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axios.get(`/categories/${id}/`);
                const category = response.data;
                setName(category.name);
            } catch (error) {
                console.error('Error fetching category', error);
            }
        };

        fetchCategory();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/categories/${id}/`, { name });
            toast.success('Category updated successfully');
        } catch (error) {
            console.error('Error updating category', error);
            toast.error('Error updating category');
        }
    }
    

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
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update Category</button>
            </form>
        </div>
    );
};

export default EditCategoryForm;
