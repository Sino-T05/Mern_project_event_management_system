import React from 'react'

const Services = () => {
  const services =[
    {
      id: 1,
      url: "/Birthday.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "/anniversary.jpg",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "/Dinner.jpg",
      title: "Candle Light Dinner",
    },

    {
      id: 4,
      url: "/Fest.jpg",
      title: "Music Fest Party",
    },
    {
      id: 5,
      url: "/party.jpg",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "/wedding.jpg",
      title: "Wedding Ceremony",
    },
  ];
  return <>

    <div className="services container">
      <h2>OUR SERVICES</h2>
      <div className="banner">
        {
          services.map(element=>{
            return(
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
      </div>
    </div>

    </>;
};

export default Services