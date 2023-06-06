import React, { useState } from 'react';
import Navigation from "./Navigation";
import "./Sidebar.css";

function Sidebar() {
    const [expanded, setExpanded] = useState(false);

    const toggleSidebar = () => {
        setExpanded(!expanded);
    };




    return (
        <>
            <button onClick={toggleSidebar} style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1 }}>
                {expanded ? "Hide Sidebar" : "Show Sidebar"}
            </button>
            <div style={{
                position: 'fixed',
                top: 0,
                right: 0,
                height: '100vh',
                width: expanded ? '200px' : '0',
                transition: 'width 0.5s',
                overflow: 'hidden',
                backgroundColor: '#f1f1f1',
            }}>
                <Navigation /> 
            </div>
        </>
    );
}

export default Sidebar;



