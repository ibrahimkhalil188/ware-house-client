
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Notfound from './Component/Notfound/Notfound';
import Manage from './Component/Manage/Manage';
import AddProduct from './Component/AddProduct/AddProduct';
import Update from './Component/Update/Update';
import Inventory from './Component/Inventory/Inventory';

function App() {
  return (
    <div style={{ backgroundColor: "#131022" }}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/manage' element={<Manage></Manage>}>
        </Route>
        <Route path='/manage/:id' element={<Manage></Manage>}> </Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/additem' element={<AddProduct></AddProduct>}></Route>
        <Route path='/update/:id' element={<Update></Update>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
