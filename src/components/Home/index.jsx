import React from 'react'
import { useHistory } from "react-router-dom";
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Home = () => {
    const { token } = useLocalStorage()
    const history = useHistory();

    if (!token) {
      history.push('/');
    }
    return (
        <div>
            <h1>Soy home</h1>
        </div>
    )
}

export default Home
