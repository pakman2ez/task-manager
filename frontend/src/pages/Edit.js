import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Edit() {
    const { id } = useParams();
    const [title, setTitle] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:5050/tasks')
            .then(res => res.json())
            .then(data => {
                const task = data.find(t => t._id === id);
                if (task) setTitle(task.title);
            });
    }, [id]);

    const update = async () => {
        await fetch(`http://127.0.0.1:5050/tasks/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title })
        });

        window.location.href = '/';
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>Edit Task</h1>

            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <button onClick={update}>Update</button>
        </div>
    );
}

export default Edit;