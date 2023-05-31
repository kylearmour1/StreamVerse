import React from 'react';
import './Home.css';

const HomePage = () => {
    return (
        <div className="container">
            <main className="main-content">
                <section className="section">
                    <h2>About StreamVerse</h2>
                    <p>StreamVerse is the best platform for streaming your favorite content!</p>
                </section>

                <section className="section">
                    <h2>Featured Streams</h2>
                    <div className="featured-streams">
                        <div className="stream-card">
                            <h3>Stream 1</h3>
                            <p>Description of Stream 1</p>
                        </div>
                        <div className="stream-card">
                            <h3>Stream 2</h3>
                            <p>Description of Stream 2</p>
                        </div>
                    </div>
                </section>
            </main>

          
        </div>
    );
}

export default HomePage;
