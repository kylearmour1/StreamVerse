import React, {useState} from 'react';
import homeCss from './Home.css';

const Home = () => {
    const [state] = useState({
        name: 'Home'
    });
    return (
        <div className={homeCss.home}>
            <h1>{state.name}</h1>
        </div>
    );
}

export default Home;