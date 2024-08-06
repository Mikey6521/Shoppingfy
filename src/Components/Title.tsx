import search from '../Images/search-24px-6-1.png'

const Title = () => {
    return (
        <>
          
        <div className='shoppingify-allows-you-take-your-shopping-list-wherever-you-go-rye'>
            <p className="shoppingify-allows-you-take-your-shopping-list-wherever-you-go-rye-sub-2">
                <span className='shoppingify-allows-you-take-your-shopping-list-wherever-you-go-rye-sub-0'>
                    {`Shoppingfy `}
                </span>
                {'allows you to take your'}
            </p>
            <p className="shoppingify-allows-you-take-your-shopping-list-wherever-you-go-rye-sub-2">
                 {'shopping list wherever you go'}
            </p>
        </div>
        
            <div className='auto-group-m6qv-bLt'>
                <img className='search-24px-6-1-tqn' src={search} alt="" />
                <input className='search-item-Rqi' type="text" placeholder="search item" />
            </div>
            
        </>
    );
}
 
export default Title;