import { useState } from 'react';

function Add() {
    const [title, setTitle] = useState('');

    const submit = async () => {
        if (!title) {
            alert('Title required');
            return;
        }

        await fetch('http://127.0.0.1:5050/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title })
        });

        window.location.href = '/';
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>Add Task</h1>

            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <button onClick={submit}>Add</button>
        </div>
    );
}

export default Add;