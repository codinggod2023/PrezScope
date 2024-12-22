import React, { useState, useEffect } from "react";

export default function Trump_Vance(){
    const [trumpdata, setTrumpdata] = useState([]);
    const [vancedata, setVancedata] = useState([]);

    async function gettrumpData() {
        console.log("Fetching");
        try {
          let data = await fetch("http://localhost:3001/trump");
          let convertedData = await data.json();
          console.log(convertedData);
          setTrumpdata(convertedData);
          console.log(trumpdata)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      async function getvanceData() {
        console.log("Fetching");
        try {
          let data = await fetch("http://localhost:3001/vance");
          let convertedData = await data.json();
          console.log(convertedData);
          setVancedata(convertedData);
          console.log(vancedata)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      useEffect(() => {
        gettrumpData();
        getvanceData();
      }, []);
      return(
        <>
        <div style={containerStyle}>
      <h1 style={{textAlign: 'center' }}>Trump Data</h1>
      <div className="row">
        {trumpdata.map((element, index) => (
          <div key={index} className="card" style={cardStyle(element.color)}>
            <div className="card-header" style={headerStyle(element.color)}>
              {element.Border_Goal}
            </div>
            <div className="card-body" style={bodyStyle}>
              <h3 className="card-title" style={titleStyle(element.color)}>
              Economic Goal {element.Economic_Goal}
              </h3>
              <h2 style={positionStyle}>Security Goal: {element.Security_Goal}</h2>
              <h2 style={genderStyle}>Foreign Policy Goal: {element.Foreign_Policy_Goal}</h2>
              <h2 style={salaryStyle}>Energy Goal: {element.Energy_Goal}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div style={containerStyle}>
      <h1 style={{textAlign: 'center' }}>Vance Data</h1>
      <div className="row">
        {vancedata.map((element, index) => (
          <div key={index} className="card" style={cardStyle(element.color)}>
            <div className="card-body" style={bodyStyle}>
              <h2 style={positionStyle}>Border Goal: {element.Border_Goal}</h2>
              <h2 style={positionStyle}>Economic Goal: {element.Economic_Goal}</h2>
              <h2 style={positionStyle}>Security Goal: {element.Security_Goal}</h2>
              <h2 style={genderStyle}>Foreign Policy Goal: {element.Foreign_Policy_Goal}</h2>
              <h2 style={salaryStyle}>Energy Goal: {element.Energy_Goal}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
    )
    
}

const containerStyle = {
  textAlign: 'center',
  padding: '20px',
};

const cardStyle = (color) => ({
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  flex: '0 0 calc(33.33% - 20px)',
  marginBottom: '20px',
  fontcolor:'rgba(0, 0, 0, 0.1)',
});

const headerStyle = (color) => ({
  backgroundColor: color,
  color: '#333',
  padding: '10px',
  borderRadius: '5px 5px 0 0',
});

const bodyStyle = {
  padding: '20px',
};

const titleStyle = (color) => ({
  fontSize: '20px',
  marginBottom: '10px',
  color: 'black',
});

const salaryStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '5px',
  color: '#333',
};

const genderStyle = {
  fontSize: '18px',
  marginBottom: '4px',
  marginTop: '2px',
  color: 'green',
};

const positionStyle = {
  fontSize: '20px',
  marginBottom: '4px',
  marginTop: '2px',
  color: 'orange',
};