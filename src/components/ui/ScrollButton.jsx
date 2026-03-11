import { Link } from 'react-scroll';

const ScrollButton = ({ to, children, className = '' }) => (
  <Link to={to} smooth={true} duration={500} className='group'>
    <button className={`text-white border-2 px-6 py-3 m-2 flex items-center hover:bg-[#77DD77] hover:border-[#77DD77] ${className}`}>
      {children}
    </button>
  </Link>
);

export default ScrollButton;
