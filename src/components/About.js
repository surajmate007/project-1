import React from 'react'

export default function About(props) {
  return (
    <div id="accordion">
    <div className={`card text-${props.mode === 'dark' ? 'light' : ''}`} style={{backgroundColor : props.mode === 'light' ? 'white' : 'black'}}>
      <div className="card-header" id="headingOne" style={{backgroundColor : props.mode === 'light' ? 'white' : 'black'}}>
        <h5 className="mb-0">
          <button className="btn btn-link" style={{color : props.mode === 'light' ? 'blue' : 'yellow'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            This Project
          </button>
        </h5>
      </div>
  
      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
        <div className="card-body">
          This project is made by Suraj Mate. You can see more about this authors in Author Section below. This is the simple text modifier project where the text given by the user is modified according to the options selected.
        </div>
      </div>
    </div>
    <div className={`card text-${props.mode === 'dark' ? 'light' : ''}`} style={{backgroundColor : props.mode === 'light' ? 'white' : 'black'}}>
      <div className="card-header" id="headingTwo">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed" style={{color : props.mode === 'light' ? 'blue' : 'yellow'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Author
          </button>
        </h5>
      </div>
      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
        <div className="card-body">
          Author of this project is Suraj Mate. He pursued his undergraduate degree in Electrical Engineering from Government College of Engineering Chandrapur. Currently he is pursuing his masters (M.Tech) in Cyber Security from IIT Delhi.
        </div>
      </div>
    </div>
    <div className={`card text-${props.mode === 'dark' ? 'light' : ''}`} style={{backgroundColor : props.mode === 'light' ? 'white' : 'black'}}>
      <div className="card-header" id="headingThree">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed" style={{color : props.mode === 'light' ? 'blue' : 'yellow'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            More Projects
          </button>
        </h5>
      </div>
      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
        <div className="card-body">
        1. Personal Information Webpage    2. Encryption and Decryption Webpage
        </div>
      </div>
    </div>
  </div>
  )
}