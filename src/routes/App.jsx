import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from '@pages/Home';
import Login from '@pages/Login';
import PasswordRecovery from '@pages/PasswordRecovery';
import Users from './pages/Users'
import Blog from './pages/Blog'
import NotFound from '@pages/NotFound';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/password-recovery" element={<PasswordRecovery />} />
          {/* <Route exact path="/users" render={() => <Users name='John Serrano' />} />
          <Route exact path="/blog/:slug" component={Blog}></Route> */}
          <Redirect from="/redirect" to="/login" />
          <Route component={NotFound} />
        </Switch>
    </Router>
  );
}

export default App;








// import Layout from '@containers/Layout';
// import Home from '@pages/Home';
// import Login from '@pages/Login';
// import PasswordRecovery from '@pages/PasswordRecovery';
// import SendEmail from '@pages/SendEmail';
// import NewPassword from '@pages/NewPassword';
// import MyAccount from '@pages/MyAccount';
// import CreateAccount from '@pages/CreateAccount';
// import Checkout from '@pages/Checkout';
// import Orders from '@pages/Orders';

// import NotFound from '@pages/NotFound';
// import '@styles/global.css'
// import AppContext from '@context/AppContext.js';
// import React from 'react';  //importamos el dom de react
// import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
// import useInitialState from '@hooks/useInitialState'


// const App = () => {  //creamos el element
//     const initialState =  useInitialState();   
//     return (
//         <div>
//         <AppContext.Provider value={initialState}>
//         <BrowserRouter >
//             <Layout>
//                 <Switch>
//                     <Route exact path="/" element={Home} />
//                     <Route exact path="/login" element={Login} />			
//                     <Route exact path="/password-recovery" element={<PasswordRecovery />} />
//                     <Route path="/send-email" element={<SendEmail />} />
//                     <Route path="/new-password" element={<NewPassword />} />
//                     <Route path="/account" element={<MyAccount/>} />
//                     <Route path="/signup" element={<CreateAccount/>} />
//                     <Route path="/checkout" element={<Checkout/>} />
//                     <Route path="/orders" element={<Orders/>} />
//                     <Route path="*" element={<NotFound />} />

//                 </Switch>
//             </Layout>
//         </BrowserRouter> 
//         </AppContext.Provider>
//         </div>
//     );
// };
    
// export default App;         //exportamos


// /* <Layout>
// {/* login se cierra ya que no va a contener otro componete, como si lo hace layout */
// /* <Login />
// <RecoveryPassword />
// </Layout> */

// // <BrowserRouter>
// //     <Switch>
// //         <Layout>
// //             <Route exact path="/" element={Home}/>
// //             <Route exact path="/login" element={Login} />
// //             <Route exact path="recovery-password" element={RecoveryPassword} />
// //             <Route element={NotFound} />
// //         </Layout>
// //     </Switch>
// // </BrowserRouter>