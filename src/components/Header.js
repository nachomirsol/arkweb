import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/iconButton';
import SideDrawer from './SideDrawer';


class Header extends Component{
    render(){
        return(
            <AppBar
                position="fixed"
                style={{
                    backgroundColor:"#2f2f2f",
                    boxShadow:'none',
                    padding:'10px 0px'
                }}
            >
                <ToolBar>
                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue">Architecture</div>
                        <div className="header_logo_title"> construction</div>
                    </div>
                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onclick={()=>console.log("open")}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <SideDrawer></SideDrawer>
                </ToolBar>
            </AppBar>
        );
    }
}

export default Header