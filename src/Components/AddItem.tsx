const AddItem = () => {
    return (  
        <>
        <div style={{backgroundColor:'white'}} className="auto-group-ujiq-pm6">
            <div className="auto-group-wtsg-zUG">
                <div className="auto-group-irpr-HyA">
                    <p className="add-a-new-item-Q2C">Add a new item</p>

                    <p className="name-JtG">Name</p>
                    <input className="auto-group-drnq-qtC" type="text" placeholder="Enter a name" />

                    <p className="note-optional-HEQ">Note (optional)</p>
                    <input className="auto-group-qzdi-CsA" type="text" placeholder="Enter a note" />

                    <p className="image-optional-Rjv">Image (optional)</p>
                    <input className="auto-group-4ubn-m36" type="text" placeholder="Enter a url" />
                    
                    <p className="category-oEg" >Category</p>
                    <select className="auto-group-heqg-YTA" name="fruit">
                        <option value="">Select a category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Fruits">Fruits</option>
                        <option value="Meat">Meat</option>
                        <option value="Vegetables">Vegetables</option>
                    </select>
                    {/* <input className="auto-group-heqg-YTA" type="text" placeholder="Enter a Category" /> */}
                    

                    

                    
                </div>
            </div>

        </div>
        </>
    );
}
 
export default AddItem;