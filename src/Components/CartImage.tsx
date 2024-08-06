import { UserContext, User } from './ContextApi';
import {useContext} from 'react'
import cart from '../Images/cart.png'
import logo from '../Images/logo.png'


const CartImage = () => {
    const {user} = useContext(UserContext);
    function countTotalItemNames(data:User[]) {
        const uniqueItemNames = new Set();
        data.forEach((obj) => {
          obj.item.forEach((item) => {
            uniqueItemNames.add(item.itemname);
          });
        });
        return uniqueItemNames.size;
      }



    return ( 
        <div>
            <img className ="group-172-qjn" src={logo} alt="" />
            <div className='ellipse-1-xpQ'></div>
            <img className='vector-gkQ' src={cart} alt="" />
            <div className='rectangle-119-MrY'></div>
            <div className='item-3-HkC'>
                <p>{(user[0].id!==0)?countTotalItemNames([...user]):0}</p>
            </div>
        </div>
     );
}
 
export default CartImage;