import logo from '../../../../src/assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div className='flex flex-col items-center text-sm md:text-xl my-2 md:my-4 lg:my-8 justify-center'>
            <img src={logo} alt="logo" width='200px'/>
            <p className='my-2 #706F6F'>Journalism Without Fear or Favour</p>
            <p className='my-1 text-[#706F6F] font-semibold'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;