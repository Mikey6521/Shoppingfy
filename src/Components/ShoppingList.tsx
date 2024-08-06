import source from '../Images/source.png'
import create from '../Images/create.png'
import {useContext} from 'react';
import EmptyCart from '../Images/EmptyCart.png'

import { UserContext } from './ContextApi';
import { Link } from 'react-router-dom';


const ShoppingList = () => {
    const {user} = useContext(UserContext);
    
    return ( 
        <div className="auto-group-ujiq-pm6">
            <div className="auto-group-gybj-kek">

                <div className="auto-group-c8e4-3tk">
                    <div className="rectangle-104-ZMJ"></div>
                    <p className="didnt-find-what-you-need-sMz">Didn't find what you need</p>
                    <Link style={{textDecoration:'none'}} to='/addnewitem'>
                        <div className="rectangle-103-MY4">
                            <p>add item</p>
                        </div>
                    </Link>
                    <img className="source-kaC" src={source} alt="source" />
                </div>

                <div className='auto-group-6oeq-gTr'>
                    <p className='shopping-list-bqi'>Shopping List</p>
                    <img className='create-24px-2-1-XDa' src={create} alt="create icon" />
                </div>
                { user[0].id===0 && (
                    <div>
                        <p className='no-items-czC'>No items</p>
                        <img className='undrawshoppingappflsj-1-75i' src={EmptyCart} alt="EmptyCart.png" />
                    </div>
                )}

                {user[0].id!==0 && (
                    user.map(itr => (
                        <div key={itr.id}>
                        <p className='fruit-and-vegetables-Td2'>{itr.title}</p>
                        {itr.item.map(items => (
                            <div key={items.itemname} className='auto-group-yhag-mtc'>
                            <p className='acocado-WLQ'>{items.itemname}</p>
                            <div className='auto-group-kqv6-RyA'>
                                <div className='rectangle-105-7N8'>
                                <p>{items.count} pcs</p>
                                </div>
                            </div>
                            </div>
                        ))}
                        </div>
                    ))
                    )}

            </div>

            <div className='auto-group-tvyi-2Ve'>
                <div className='rectangle-109-KFn'></div>

                
                {user[0].id===0 && (
                    <>
                    <div style={{borderColor:'#c1c1c4'}} className='rectangle-110-Fv8'>
                        <p>Enter a name</p>
                        {/* <input type="text" name="" id="" placeholder='Enter a name' /> */}
                    </div>
                    <div style={{backgroundColor:'#c1c1c4'}} className='rectangle-111-ybE'>
                        <p>save</p>
                    </div>
                    </>
                )}

                {user[0].id!==0 && (
                    <>
                    <div  className='rectangle-110-Fv8'>
                        <input type="text" name="" id="" placeholder='Enter a name' />
                    </div>
                    <div className='rectangle-111-ybE'>
                        <p>save</p>
                    </div>
                    </>
                )}
                
            </div>

        </div>
     );
}
 
export default ShoppingList;