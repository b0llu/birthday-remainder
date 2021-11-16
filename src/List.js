import React from "react";

const List = ({people}) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <artical key={id} className='person'>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{age} Years</p>
          </artical>
        )
      })}
    </>
  );
};

export default List;
