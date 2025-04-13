import { useState } from "react"

export default function AuthenticateComponent(token){

    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const [returnedUsername, setReturnedUsername] = useState(null)

    async function handleClick(){

        try {
            const response =  await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', { 
                method: "GET", 
                headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.token}` 
                }
            })
            const rawData = await response.json()
            setReturnedUsername(rawData.data.username)
            setSuccessMessage(rawData.message)
            setError(null)
        } catch (error) {
            setError(error.message);
            console.log(error)
        }
    }

    return (
        <>
            <h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {returnedUsername && <p>Your username is: {returnedUsername}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token</button>
        </>
    )
}