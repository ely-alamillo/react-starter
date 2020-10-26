import React from 'react';
import './App.css';

function App() {
  return (
    <div className="text-black min-h-screen flex items-center">
      <div className="container mx-auto p-4 flex flex-wrap items-center">
        <div className="w-full  text-center p-4">
          <div className="text-6xl font-medium">CRA, Tailwind Starter</div>
          <div className="text-xl font-medium mb-4">
            <a href="https://reactjs.org/" className="underline text-blue-500 m-5">reactjs.org</a>
            <a href="https://tailwindcss.com/" className="underline text-blue-500">tailwindcss.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
