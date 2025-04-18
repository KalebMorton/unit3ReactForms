import { useState } from "react"

export default function SignUpForm(setToken){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();

        if (password.length < 8){
            alert("password must be at least 8 characters long")
        }else{
            try { 
                const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",{ 
                    method: "POST", 
                    headers: { 
                    "Content-Type": "application/json" 
                    }, 
                    body: JSON.stringify({ 
                    username: username, 
                    password: password
                    }) 
                })
                const rawData = await response.json()
                setToken.setToken(rawData.token)

            } catch (error) {
            setError(error.message);
            console.log(error)
            }
        }
    }

    return (
        <>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label id="formContent">
                    Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br></br>
                <label id="formContent">
                    Password: <input value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br></br>
                <button id="formContent">Submit</button>
            </form>
        </>
    )
}