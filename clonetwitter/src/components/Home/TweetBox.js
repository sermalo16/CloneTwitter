import React from 'react'
import {Tweetbox, Div, Avatar, Form, DivBox} from './styles/styled';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import GifIcon from '@material-ui/icons/Gif';
import {Button} from '@material-ui/core';

export const TweetBox = () => {
  return (
    <Tweetbox>
        <Form>
            <Div>
                <Avatar src="https://randomuser.me/api/portraits/men/30.jpg" alt=""></Avatar>
                <div className="columns">
                    <input type="text" placeholder="Dejanos un tweet"/>
                    <input type="text" placeholder="Usuario"/>
                </div>
            </Div>
            <Div>
                <DivBox>
                    <AddPhotoAlternateIcon/>
                    <GifIcon/>
                </DivBox>
                <input type="text" placeholder="Opcional URl"/>

                <Button>Tweet</Button>
            </Div>
            
        </Form>
    </Tweetbox>
  )
}
