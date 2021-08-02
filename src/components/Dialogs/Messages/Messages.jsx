import React from 'react';
import pop from './../Dialogs.module.css';

const Messages = (props) => {
    return (<div className={pop.messages}>{props.message}
    </div>
    )
}


export default Messages;

{/* const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (<div className={pop.dialog + ' ' + pop.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}
*/}