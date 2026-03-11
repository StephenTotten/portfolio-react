import React from 'react';

const ProjectCard = ({ title, href, image, alt }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
      aria-label={title}
    >
      <div className='opacity-0 group-hover:opacity-100 duration-300'>
        <span className='text-xl font-bold text-white tracking-wider'>{title}</span>
        <div className='pt-8 text-center'>
          <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'
            aria-label={`Visit ${title}`}
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
