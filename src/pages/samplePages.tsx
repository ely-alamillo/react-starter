import React from 'react';
import { Link } from 'react-router-dom';

export const SamplePage = () => {
  return (
    <div className="text-black min-h-screen flex items-center">
      <div className="container mx-auto p-4 flex flex-wrap items-center">
        <div className="w-full  text-center p-4">
          <div className="text-6xl font-medium">CRA, Tailwind Starter</div>
          <Navigation />
        </div>
      </div>
    </div>
  )
}

export const HomePage = () => {
  return (
    <div className="text-black min-h-screen flex items-center">
      <div className="container mx-auto p-4 flex flex-wrap items-center">
        <div className="w-full  text-center p-4">
          <div className="text-6xl font-medium">Home Page</div>
          <Navigation />
        </div>
      </div>
    </div>
  )
}

export const ProtectedPage = () => {
  return (
    <div className="text-black min-h-screen flex items-center">
      <div className="container mx-auto p-4 flex flex-wrap items-center">
        <div className="w-full  text-center p-4">
          <div className="text-6xl font-medium">Protected Page</div>
          <Navigation />
        </div>
      </div>
    </div>
  )
}

export const Navigation = () => {
  return (
    <div className="text-xl font-medium mb-4">
      <Link to="/" className="underline text-blue-500 m-5">Landing</Link>
      <Link to="/home" className="underline text-blue-500 mr-5">Home</Link>
      <Link to="/protected" className="underline text-blue-500">Protected</Link>
    </div>
  )
}