import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState('');

    const load = async () => {
        const res = await fetch(`http://127.0.0.1:5050/tasks?search=${search}`);
        const data = await res.json();
        setTasks(data);
    };

    useEffect(() => {
        load();
    }, []);

    const del = async (id) => {
        await fetch(`http://127.0.0.1:5050/tasks/${id}`, {
            method: 'DELETE'
        });
        load();
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>Task Manager</h1>

            <input
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={load}>Search</button>

            <br /><br />

            <Link to="/add">Add Task</Link>

            <div style={{ marginTop: 20 }}>
                {tasks.map((t) => (
                    <div key={t._id}>
                        {t.title}
                        <Link to={`/edit/${t._id}`}> Edit </Link>
                        <button onClick={() => del(t._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;