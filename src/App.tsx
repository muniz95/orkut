import React from 'react'
import Routes from './routes'
import { useSelector } from 'react-redux'
import { RootState } from './modules/reducers';

const App = () => {
  const auth = useSelector((state: RootState) => state.auth);
  console.log(auth)
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App
