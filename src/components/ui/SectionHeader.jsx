const SectionHeader = ({ title, subtitle, className = '' }) => (
  <div className={className}>
    <p className='text-4xl font-bold inline border-b-4 border-[#77DD77]'>{title}</p>
    {subtitle ? <p className='py-4'>{subtitle}</p> : null}
  </div>
);

export default SectionHeader;
