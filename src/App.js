//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";


import girl from './img/girl.jpg';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

//<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/COA_of_Kharkiv_Oblast.svg/1200px-COA_of_Kharkiv_Oblast.svg.png'/>
//<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/COA_of_Kharkiv_Oblast.svg/1200px-COA_of_Kharkiv_Oblast.svg.png"/> 
//  let SomeComponent = () => <Dialogs/>              <Route path='/dialogs' component={SomeComponent} />


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper' >
                <Header />
                <Navbar />
                <div className='app-wrapper-content' >
                    <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}/>} />
                    <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage}
                    dispatch={props.dispatch}/>} />
                    <Route path='/music' render={ () => <Music/>} /> 
                    <Route path='/news' render={ () => <News/>} />  
                    <Route path='/settings'  render={ () => <Settings/>} /> 
                    
                </div>
                { /*<Profile/> <Dialogs  dialogs />*/}
            </div>
        </BrowserRouter>
    );
}

export default App;