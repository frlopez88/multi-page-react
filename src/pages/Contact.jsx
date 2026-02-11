import React from 'react'

export const Contact = () => {

  let name = "";
  let email = "";
  let phone = "";
  let message = "";

  const onChangeName = (event) => {
    name = event.target.value;
  }

  const onChangeEmail = (event) => {
    email = event.target.value;
  }

  const onChangePhone = (event) => {
    phone = event.target.value;
  }

  const onChangeMessage = (event) => {
    message = event.target.value;
  }

  const onSubmitHandler = async (event) => {

    const url = import.meta.env.VITE_BASE_URL + "leads"
    const token = import.meta.env.VITE_TOKEN;

    event.preventDefault();

    const lead = {
      name, 
      email, 
      phone, 
      message
    }

    const response = await fetch(url, 
      {
        method : "POST", 
        headers: {
          'Content-Type' : 'application/json', 
          'apikey' : token
        }, 
        body :  JSON.stringify(lead)
      }
    )

    

  }

  

  return (
    <>
      <main className='container'>

        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" onChange={onChangeName} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" onChange={onChangeEmail} />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type='tel' className="form-control" onChange={onChangePhone} />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" onChange={onChangeMessage}/>
          </div>

          <button className='btn btn-primary w-100'>Send</button>
        </form>

      </main>
    </>
  )
}
