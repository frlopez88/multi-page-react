import React from 'react'

export const Home = () => {
  return (
    <>
      <main className='container'>

        <p className='display-1'>Welcome to Software Land</p>
        
        <img className='img-fluid' src='/cover.png' />

        <p className='display-3'>Vision</p>

        <p>To redefine the boundary between human imagination and digital reality by creating the world’s most intuitive, AI-integrated software ecosystem.</p>

        <p className='display-3'>Mision</p>

        <p>
          Our mission is to empower creators and enterprises through three core pillars:

          <ul className="list-group mt-3">
            <li className="list-group-item">Innovation: Developing cutting-edge, AI-driven platforms that solve complex problems with elegant simplicity.</li>
            <li className="list-group-item">Community: Fostering a global network of developers and creators by providing accessible, open-ended technology.</li>
            <li className="list-group-item">Integrity: Ensuring every line of code we write prioritizes security, scalability, and ethical digital transformation.</li>
          </ul>
        </p>

      </main>
    </>
  )
}
