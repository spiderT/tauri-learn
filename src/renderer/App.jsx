import React, { useEffect } from 'react';

import User from './container/User/index.jsx';
import Chat from './container/Chat/index.jsx';

export default function App() {


  return (
    <div className="wrap">
      <User />
      <Chat />
    </div>
  );
}
