import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import {Box} from '@hojjat-dev/components';

const Header = styled.h1`
  font-size: 68px;
`

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hojjat.dev</title>
        <meta name="description" content="..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
          Welcome
      </Header>
      <Box>Box</Box>
    </div>
  )
}

export default Home
