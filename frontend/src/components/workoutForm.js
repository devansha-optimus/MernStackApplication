import { useState } from "react"

const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [load , setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const workout = { title, load, reps }
        const res = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        const json = await res.json()
        if (!res.ok) {
            setError(json.error)
        }
        if (res.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('new workoout added ', json)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>
                Add a new Workout
            </h3>
            <label>Exersize Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title} />
            
            <label>Load (in Kg):</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load} />
            
            <label>Reps</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps} />
            
            <button>Add Workout </button>
            {error && <div className="error">{ error}</div>}

        </form>
    )
}

export default WorkoutForm;