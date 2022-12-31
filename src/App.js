import './App.css';
import AdminHome from './VIEWS/PAGES/AdminHome';
import Users from './VIEWS/PAGES/Users';
import AuthUser from './VIEWS/PAGES/AuthUser';
import RegisterUser from './VIEWS/PAGES/RegisterUser';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import UserInfos from './VIEWS/PAGES/UserInfos';
import UpdateUser from './VIEWS/PAGES/UpdateUser';
import Transactions from './VIEWS/PAGES/Transactions';
import SpHome from './VIEWS/PAGES/SpHome';
import SpInfos from './VIEWS/PAGES/SpInfos';
import NewSp from './VIEWS/PAGES/NewSp';

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
          <Route path="/update/:id" element={<UpdateUser />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/servicepoint" element={<SpHome />} />
          <Route path="/servicepoint/:id" element={<SpInfos />} />
          <Route path="/newsp" element={<NewSp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
