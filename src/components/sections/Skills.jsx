import SectionHeader from '../ui/SectionHeader';
import SkillCard from '../ui/SkillCard';
import { skills } from '../../data/skills';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-[35rem] bg-[#1e1e1e] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <SectionHeader
          title='Skills'
          subtitle="These are some of the technologies I've worked with:"
        />
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8'>
          {skills.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
