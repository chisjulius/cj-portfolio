import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import { Post } from './components'



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:slug' element={<Post/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
