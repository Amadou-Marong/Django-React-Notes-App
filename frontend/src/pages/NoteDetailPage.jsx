// src/pages/NoteDetailPage.js
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios";
import Swal from "sweetalert2";

const NoteDetailPage = () => {
    const { id } = useParams();
    const [note, setNote] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchNote = async () => {
            try {
                const response = await axios.get(`/notes/${id}/`);
                setNote(response.data);
            } catch (error) {
                console.error('Error fetching note', error);
            }
        };

        fetchNote();
    }, [id]);

    if (!note) return <div>Loading...</div>;

    const handleDelete = async () => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                    // fetch(`/api/notes/${id}/`, {
                    //     method: 'DELETE',
                    // })
                    // .then(() => navigate('/'))
                    axios.delete(`/notes/${note.id}/`);
                    navigate('/');
                }
              });
            // await axios.delete(`/notes/${note.id}/`);
            // navigate('/');
        } catch (error) {
            console.error('Error deleting note', error);
        }

    }

    

    return (
        <div className="p-4">
            <article className="border p-4 my-4 rounded shadow">
                <h2 className="font-bold my-3">{note.title}</h2> 
                <hr />
                <p className="text-gray-500">{note.content}</p>
                <Link to={`/edit/${note.id}`}>
                    <button className="bg-blue-500 text-white p-2 rounded mr-2">Edit</button>
                </Link>
                <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded mt-4 ">Delete</button>
            </article>
        </div>
    );
};

export default NoteDetailPage;
