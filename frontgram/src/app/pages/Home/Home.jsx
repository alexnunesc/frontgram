import React from 'react';
import Header from '../Header/Header';
import Post from '../../components/Post/Post';

import style from './Styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Header />
      Home
      <div className={ style.homeContent }>
        <Post />
      </div>
    </div>
  );
}
