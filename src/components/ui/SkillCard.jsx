import React from 'react';

const SkillCard = ({ name, icon }) => (
  <div className='hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={icon} alt={`${name} icon`} />
    <p className='my-4'>{name}</p>
  </div>
);

export default SkillCard;
