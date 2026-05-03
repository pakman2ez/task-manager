import { useEffect, useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [search, setSearch] = useState('');

    const load = async () => {
        try {
            const res = await fetch(`http://127.0.0.1:5050/tasks?search=${search}`);
            const data = await res.json();
            setTasks(data || []);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        load();
    }, []);

    const add = async () => {
        if (!title) return;

        await fetch('http://127.0.0.1:5050/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, status: 'pending' })
        });

        setTitle('');
        load();
    };

    const del = async (id) => {
        await fetch(`http://127.0.0.1:5050/tasks/${id}`, {
            method: 'DELETE'
        });
        load();
    };

    return (
        <div style={{ padding: 20, maxWidth: 500 }}>
            <h1>Task Manager</h1>

            <div>
                <input
                    placeholder="Enter task"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button onClick={add} style={{ marginLeft: 10 }}>
                    Add
                </button>
            </div>

            <div style={{ marginTop: 10 }}>
                <input
                    placeholder="Search task"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={load} style={{ marginLeft: 10 }}>
                    Search
                </button>
            </div>

            <div style={{ marginTop: 20 }}>
                {tasks.map((t) => (
                    <div key={t.id} style={{ marginBottom: 10 }}>
                        <b>{t.title}</b> ({t.status})
                        <button
                            style={{ marginLeft: 10 }}
                            onClick={() => del(t.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;