import React from 'react'
import './style.css'

const Home = () => {
    return (
        <div className='container'>
            <h1 className='homeHeader'>Arecio Canton;</h1>
            <p className='homeContent'>This is my Project Portfolio built in <strong>React</strong> containing all the cool projects that <br/> I've built over the years! I recently started my journey in becoming a <strong>Full Stack Developer <br /></strong>this year when I enrolled in UCF's online coding bookcamp</p>
            <button className='btn btn-none' ><i className='bi bi-arrow-down-circle-fill' href='/Work'></i></button>
        </div>
    )
}

export default Home
