import React, { useState } from 'react'
import { CardComponent } from '../components/CardComponent'

export const Services = () => {

  const [services, setServices] = useState([
    {
      name: "Web Apps",
      description: "Web development for big and small companies",
      price: "$50 per hour"
    },
    {
      name: "Mobile Apps",
      description: "Deploy your idea on Iphones and Android devices",
      price: "$100 per hour"
    },
    {
      name: "AWS Management",
      description: "We help you mantaining your Infra",
      price: "$150 per hour"
    }
  ])

  return (
    <>
      <main className='container'>

        <p className='display-1'>Services</p>

        <img className='img-fluid' src='/services_cover.png' />

        {
          services.map((item) => (
            <CardComponent title={item.name}
              description={item.description}
              price={item.price} />

          ))
        }

      </main>

    </>
  )
}
