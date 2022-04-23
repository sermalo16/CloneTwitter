import React from 'react';
import {Contenedor} from './styles/styled';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconOption } from './IconOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';


export const Sidebar = () => {
  return (
    <Contenedor>
        <TwitterIcon className="TwitterLogo"/>


        {/* IconOption*/}
        <IconOption active Icon = {HomeIcon} text="Home" />
        <IconOption Icon = {SearchIcon} text="Explore"/>
        <IconOption Icon={NotificationsNoneIcon} text="Notifications"/>
        <IconOption Icon= {MailOutlineIcon} text="Messages"/>
        <IconOption Icon= {BookmarkBorderIcon} text="Bookmarks"/>
        <IconOption Icon = {ListAltIcon} text="List"/>
        <IconOption Icon = {PermIdentityIcon} text="Profiles"/>
        <IconOption Icon = {MoreHorizIcon} text="More"/>


        <Button variant="outlined" fullWidth>Tweet</Button>


    </Contenedor>
  )
}
