import React from 'react'

export const CardComponent = ({ title, description, price }) => {
    return (
        <>
            <div class="card m-3 bg-dark text-light" >
                <div class="card-body">
                    <h5 class="card-title"> {title} </h5>
                    <p class="card-text"> {description} </p>
                    <p class="card-text"> {price} </p>
                </div>
            </div>
        </>
    )
}
