import {useContext } from 'react';
import add from '../Images/add.png'
import { UserContext} from './ContextApi';
import { handleClick } from './cartAlgo';

type card={
    name:string,
    price:number,
    img:string
}

type Productprops={
    title: string;
    arry: card[];
}

const Products = ({title,arry}:Productprops) => {

    const {user, setUser} = useContext(UserContext);
   
    const additems = (Category:string, value:string)=>{
        
        const newCartValue = handleClick(Category, value, [...user]);
            setUser(newCartValue);
            console.log(newCartValue);
    }
    return ( 
        <>
        <p className="fruit-and-vegetables-KZi">{title}</p>
        <div className='auto-group-uf6y-1J8'>
            {
                arry.map((item)=>(
                    <div key={item.name} className="group-190-d4c">
                        <div className="group-183-Nnt"> 
                            <img src={item.img} alt="image" />
                            <p className="avocado-rV6">{item.name}</p>
                            <p className="avocado-rV6">₹{item.price}/-</p>
                            <button onClick={()=>(additems(title,item.name))} className="add-24px-4-1-Zkt btn">Add to cart</button>
                            {/* <img onClick={()=>(additems(title,item.name))} className="add-24px-4-1-Zkt" src={add} alt="plus" /> */}
                        </div> 
                    </div>
                    
                ))
            }
                
        </div>
        </>
     );
}
 
export default Products;