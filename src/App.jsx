import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import GetStarted from './components/GetStarted';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </>
  )
}

export default App
