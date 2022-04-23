import React from 'react'
import {Container, Header} from './styles/styled'
import { TweetBox} from './TweetBox';

export const Home = () => {
  return (
    <Container>


      {/* Header */}
      <Header>
        <h2>Home</h2>
      </Header>

      {/*TweetBox */}
      <TweetBox/>



      {/* post */ }
    </Container>
  )
}
