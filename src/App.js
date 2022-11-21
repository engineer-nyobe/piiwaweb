import './App.css';
import AdminHome from './VIEWS/PAGES/AdminHome';
import Users from './VIEWS/PAGES/Users';
import AuthUser from './VIEWS/PAGES/AuthUser';
import RegisterUser from './VIEWS/PAGES/RegisterUser';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import UserInfos from './VIEWS/PAGES/UserInfos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthUser />} />
          <Route path="/home" element={<AdminHome />} />
          <Route path="/login" element={<AuthUser />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserInfos />} />
          <Route path="/register" element={<RegisterUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
