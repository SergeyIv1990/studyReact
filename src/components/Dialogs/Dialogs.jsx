import React from 'react';
import pop from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages';

const Dialogs = (props) => {
    
    let dialogsElement = props.state.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id} />)
    let messagesElement = props.state.messages.map(messages => <Messages message={messages.message} />)
    return (
        <div className={pop.dialogs}>
            <div className={pop.dialogsItem}>
                {dialogsElement}
            </div>
            <div calssName={pop.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;



{/*
    import { NavLink } from "react-router-dom";
    const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (<div className={pop.dialog + ' ' + pop.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}


const Messages = (props) => {
    return (<div className={pop.messages}>{props.message}
    </div>
    )
}

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />

                <Messages message={messagesData[0].message} />
                <Messages message={messagesData[1].message} />
                <Messages message={messagesData[2].message} />
                <Messages message={messagesData[3].message} />
                <Messages message={messagesData[4].message} />
                <Messages message={messagesData[5].message} />
*/}
{/* 
    import dialogsData from '../dialogsData';
import messagesData from '../messagesData';
    let dialogsData = [
        { id: 1, name: 'Sergey' },
        { id: 2, name: 'Dima' },
        { id: 3, name: 'Natasha' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Zina' },
        { id: 6, name: 'Lina' }
    ]
    let messagesData = [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Hi' },
        { id: 3, message: 'How are you' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Thank you' },
        { id: 6, message: 'Ulalala' }
    ]
*/} 