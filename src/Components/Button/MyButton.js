import React from 'react';
import Button from '@material-ui/core/Button';

import './MyButton.css'

function MyButton(props) {
    return (
    <Button className={'btn'} endIcon={props.icon ? <div className='btnContainerIcon'>{props.icon}</div>:null}> 
    <span className='btnText'>{props.text}</span>
    </Button>
    )
}

export default MyButton
