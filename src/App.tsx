import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import './styles/shopping-list.css'
import Home from './Components/Home';
import CartImage from './Components/CartImage';
import UserProvider from './Components/ContextApi';
import AddNewItem from './Components/AddNewItem';


function App() {
  return (
    <div>
      <BrowserRouter>
      <div className='shopping-list-bWg'>
      <UserProvider>
        <div className='auto-group-tmlu-D2G'>
          <Navbar/>
          <CartImage/>
        </div>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/home" Component={Home}></Route>
          <Route path="/addnewitem" Component={AddNewItem}></Route>
        </Routes>
        </UserProvider>
        
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
