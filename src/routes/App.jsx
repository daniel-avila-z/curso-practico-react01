import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Login from '@pages/Login';
import PasswordRecovery from '@pages/PasswordRecovery';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';

import NotFound from '@pages/NotFound';
import '@styles/global.css'
import AppContext from '@context/AppContext.js';
import React from 'react';  //importamos el dom de react
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useInitialState from '@hooks/useInitialState'


const App = () => {  //creamos el element
    const initialState =  useInitialState();   
    return (
        <AppContext.Provider value={initialState}>
        <BrowserRouter basename='/'>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />			
                    <Route path="/password-recovery" element={<PasswordRecovery />} />
                    <Route path="/send-email" element={<SendEmail />} />
                    <Route path="/new-password" element={<NewPassword />} />
                    <Route path="/account" element={<MyAccount/>} />
                    <Route path="/signup" element={<CreateAccount/>} />
                    <Route path="/checkout" element={<Checkout/>} />
                    <Route path="/orders" element={<Orders/>} />
                    <Route path="*" element={<NotFound />} />

                </Routes>
            </Layout>
        </BrowserRouter> 
        </AppContext.Provider>
    );
};
    
export default App;         //exportamos


/* <Layout>
{/* login se cierra ya que no va a contener otro componete, como si lo hace layout */
/* <Login />
<RecoveryPassword />
</Layout> */

// <BrowserRouter>
//     <Switch>
//         <Layout>
//             <Route exact path="/" element={Home}/>
//             <Route exact path="/login" element={Login} />
//             <Route exact path="recovery-password" element={RecoveryPassword} />
//             <Route element={NotFound} />
//         </Layout>
//     </Switch>
// </BrowserRouter>