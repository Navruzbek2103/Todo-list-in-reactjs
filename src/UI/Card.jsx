import React from 'react';
import "./style.scss"

const Card = (birNarsaProps) => {
  const {user: {first_name, last_name, avatar, email, id, online}} = birNarsaProps;
  // console.log(birNarsaProps);
  const cardStyle = {
    backgroundColor: ("Navro'zbek".length > "Otabek".length) ? "azure" : "orange", 
    width: "250px", 
    margin: '20px',
    borderRadius: "10px"
  }

  

  return (
    <div>
      <>
        <div className="card" style={cardStyle}>
          <img src={avatar} alt={first_name} className="card-img"/>
          <div className="card-body">
            <h3 className="card-title">{first_name} {last_name}</h3>
            <p className="card-text">{email}</p>
            <button className={`btn ${online ? "btn-success" : "btn-danger"}`}>{online ? "Online" : "Offline"}</button>
          </div>
        </div>
      </>
    </div>
  );
};

export default Card;