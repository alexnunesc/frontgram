import { useState } from 'react';

import heartEmpty from './assets/heartWhite.svg';
import heartFull from './assets/heartRed.svg';

export default function LikeButton() {
  const [liked, setLiked] = useState(true);
  return (
    <button onClick={ () => setLiked(!liked) }>
      {
        !liked ? (<img src={ heartFull } alt="" />) : (<img src={ heartEmpty } alt="" />)
      }
    </button>
  );
}
