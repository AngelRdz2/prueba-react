import React from "react";

const Home = ({ title = "Hola mundo" }) => {
    return (

        <div className="p-4 border rounded-xl shadow-md bg-white">
            <h1 className="text-2xl font-bold text-red-500">

            </h1>
            <h2 className="text-lg text-gray-700">{title}</h2>
        </div>
    );
};

export default Home;