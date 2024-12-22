import React from "react";
import './Navbar.css';

export default function Layout(){
    return(
        <>
             <div>
      <div
        className="layout bg-dark text-white text-center py-5"
      >
        <div className="container">
          <h1 className="display-4">Together for a Better Future</h1>
          <p className="lead">Uniting for a brighter tomorrow.</p>
        </div>
      </div>
      <div className="about py-5" id="about">
        <div className="container">
          <h2 className="display-4 text-center">Votes Matter</h2>
          <p className="lead text-center">
          Don’t let others decide for you. Your vote makes a difference.
          </p>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <img
                src="https://files.oaiusercontent.com/file-Af2xy662TuCnanTtErmfbJ?se=2024-12-22T16%3A09%3A15Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D90b5fb8c-4140-4b32-a5df-9eefafa4ed23.webp&sig=6GUKS3cB9wt78IkqMi8ruSMf5kT80CnJoi8i97u6cBs%3D"
                alt="To vote picture"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="footer bg-dark text-white py-4 text-center">
        <div className="container">
          <p>&copy; 2024 Presidential Campaign. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
        </>
    )
}