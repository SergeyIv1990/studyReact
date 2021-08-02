import React from 'react';
import pop from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (<div className={pop.dialog + ' ' + pop.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}


export default DialogItem;