import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";

const App = () => {
  return (
    <Router>
    <div>
      <h1>Oi</h1>

    <Link to='/'>Home</Link>
    <Link to='/users'>Users</Link>
    <Link to='/social'>Social</Link>

    <Routes>
      <Route path='/' exact element={<Page1/>} />
      <Route path='/users' element={<Page2/>} />
      <Route path='/social' element={<Page3/>} />
    </Routes>
    </div>
    </Router>
  );
};

export default App;
