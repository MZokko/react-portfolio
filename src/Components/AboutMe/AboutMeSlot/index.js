import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {styles} from './styles';

const AboutMeSlot = (props) => {
    const hasIcon = !!props.icon
    return (
        <div style={styles.aboutMeSlot}>
        <ListItem>
            {
              hasIcon && <ListItemIcon>
                    {props.icon}
                </ListItemIcon>  
            } 
          <ListItemText primary={props.text || 'unknown'} />
        </ListItem>
        </div>
    );
}

export default AboutMeSlot;
