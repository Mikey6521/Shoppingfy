import data from '../Data/db'
import Products from './Product-type';


const sortedData = data.slice().sort((a, b) => {
    a.arry.sort();
    b.arry.sort();
    return a.title.localeCompare(b.title);
  });

const FetchProducts = () => {
    // const [cartitems, setCartitems] = useState<number>(0);
    
    return ( 
        <>
        {sortedData.map((item)=>(
            <Products  title={item.title} arry={item.arry} key={item.id}/>
        ))}
        
        </>
     );
}
 
export default FetchProducts;