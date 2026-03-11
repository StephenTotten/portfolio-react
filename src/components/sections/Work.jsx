import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../ui/ProjectCard';
import { websiteProjects, collaborations } from '../../data/projects';

const Work = () => {
  return (
    <div name='work' className='w-full text-gray-300 bg-gray-800'>
      <div className='max-w-[1200px] mx-auto p-4 flex flex-col w-full py-20'>
        <div className='flex flex-col md:flex-row gap-8'>
          {/* Personal Projects Section */}
          <div className='w-full md:w-1/2'>
            <div className='pb-8'>
              <SectionHeader
                title='Websites'
                subtitle="Check out some of the websites I've worked on or created."
              />
            </div>
            {/* Container */}
            <div className='grid sm:grid-cols-2 gap-4'>
              {websiteProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  href={project.href}
                  image={project.image}
                  alt={project.alt}
                />
              ))}
            </div>
          </div>

          {/* Professional Collaboration Section */}
          <div className='w-full md:w-1/2'>
            <div className='pb-8'>
              <SectionHeader
                title='Professional Collaboration'
                subtitle='These are some of the companies I have worked with.'
              />
            </div>
            {/* Container */}
            <div className='grid grid-cols-2 gap-6 text-center'>
              {collaborations.map((collab) => (
                <div key={collab.name} className='hover:scale-110 duration-500'>
                  <img className='w-40 mx-auto' src={collab.image} alt={collab.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
