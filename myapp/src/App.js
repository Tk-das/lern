import { useState } from 'react';
import Mycontext from './myContext.js';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Home from './pages/Home.jsx';

const App = ()=>{
    // Context useState
    const [ sizeWoodTgl,setSizeWoodTgl ] = useState('hidden');
    
    const [ mainPage,setMainPage ] = useState('');
    
    const pageRenderFun = ()=>{
        switch (mainPage){
            case 'login':
                return <Login setMainPage={setMainPage}/>
            case 'signup':
                return <Signup setMainPage={setMainPage}/>
            case 'home':
                return <Home setMainPage={setMainPage}/>
            default:
                return <Home setMainPage={setMainPage}/>
        }
    }
    
    return(
        <Mycontext.Provider value={{sizeWoodTgl,setSizeWoodTgl}}>
            <div className='relative'>
                {pageRenderFun()}
            </div>
        </Mycontext.Provider>
    );
}

export default App;
