import './Home.css';
import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <div className="Home">
            <h1>Home</h1>
            <p>Welcome to the home page!</p>
        </div>
    );
    }
    
export default Home;