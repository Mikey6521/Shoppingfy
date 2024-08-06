import {Link} from 'react-router-dom';
import bullets from './Images/formatlistbulleted-24px-1.png'
import replay from './Images/replay-24px-1.png'
import chart from './Images/insertchartoutlined-24px-1.png'
const Navbar = () => {
    return (  
        <div>
            
            <div className="rectangle-95-UMW">
            </div>
            <div className='rectangle-139-BFv'>
            </div>
            <Link to = '/'>
                <img className='formatlistbulleted-24px-1-Jzk' src={bullets} alt="bullets" />
                <div className='group-218-j6Q'>
                    <div className='rectangle-146-fEx'></div>
                    <p className='items-asi'>items</p>
                    <div className='polygon-1-HGL'></div>
                </div>
            </Link>                               
            <Link to = '/home'>
                <img className='replay-24px-1-CB2' src={replay} alt="replay" />
                <div className='group-218-j6Q'>
                    <div className='rectangle-146-fEx'></div>
                    <p className='items-asi'>history</p>
                    <div className='polygon-1-HGL'></div>
                </div>
            </Link>

            <Link to = '/'>
                <img className='insertchartoutlined-24px-1-Ukp' src={chart} alt="charts" />
                <div className='group-218-j6Q'>
                    <div className='rectangle-146-fEx'></div>
                    <p className='items-asi'>charts</p>
                    <div className='polygon-1-HGL'></div>
                </div>
            </Link>
            
            
        </div>
    );
}
export default Navbar;