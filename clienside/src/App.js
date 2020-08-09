import React from 'react';
import './App.css';
import {BrowserRouter,Route, Link} from "react-router-dom"
import HomeScreen from './screens/HomeScreen'
import productScreen from './screens/ProductScreens'
import CartScreen from './screens/CartScreen';
import SignScreens from './screens/SignInScreen';
import Registerscreen from './screens/Registerscreen';
import { useSelector } from 'react-redux';
import Shoppingcreen from './screens/Shoppingcreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';


function App() {
  const userSignin = useSelector(state=>state.userSignin)
  const {userInfo} = userSignin


  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open")
  }
 
  return (
    <BrowserRouter>
    <div className="grid-container" >
    <header className="header">
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/" >MYSHoppY</Link>
          
        </div>
        <div className="header-links">
            <a href="cart.html">Cart</a>
            {
              userInfo ? <Link to='/profile'>{userInfo.name}</Link>: 
              <Link to="/signin">Signin</Link>
            }
            {/* <a href="sigin.html">Sign In</a> */}
        </div>
    </header>

    <aside className="sidebar">
         <h3>Shopping Categories</h3>
         <button className="sidebar-close-button" onClick={closeMenu}>X</button>
         <ul>
             <li>
                 <a href="index.html">Pants</a>
             </li>
             <li>
                 <a href="index.html">Pants</a>
             </li>
         </ul>
    </aside>
    
    <main className="main">
       <div className="content">
         <Route exact={true} path='/register' component={Registerscreen} />
         <Route exact={true} path='/payment' component={PaymentScreen} />
         <Route exact={true} path='/shipping' component={Shoppingcreen} />
         <Route exact={true} path='/placeorder' component={PlaceOrderScreen} />
         <Route exact={true} path="/signin" component={SignScreens} />
         <Route exact={true} path="/products/:id" component={productScreen} />
          <Route exact={true} path="/cart/:id?" component={CartScreen} />
         <Route exact={true} path="/" component={HomeScreen} />
       </div>
    </main>
    <footer className="footer">
        all right reserverd
    </footer>
</div>
</BrowserRouter>
  );
  
  }
export default App;
