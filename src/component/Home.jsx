import React from "react";

const Home = ({ title = "Hola mundo" }) => {
    return (
        <div className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-bold">{title}</h2>
            <p></p>
        </div>
    );
};

export default Home;