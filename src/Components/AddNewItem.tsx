import AddItem from './AddItem';
import FetchProducts from './FetchProducts';
import ShoppingList from './ShoppingList';
import Title from './Title'
const AddNewItem = () => {
  
  
    return ( 
        <>
        <div className='auto-group-ffha-1CL'>
          <div className='auto-group-udsy-YTA'>
            <Title />
          </div>
          <div className='auto-group-4c8g-6S4'>
              <FetchProducts />
          </div>
        </div>
          <AddItem/>
        </>
     );
}
 
export default AddNewItem;
