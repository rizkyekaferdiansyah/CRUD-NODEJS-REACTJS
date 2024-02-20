import {BrowserRouter, Routes, Route} from "react-router-dom";
import { UserList } from "./commponents/UserList";
import { AddUser } from "./commponents/AddUser";
import {EditUser} from "./commponents/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<UserList/>}/>
          <Route path="add" element={<AddUser/>}/>
          <Route path="edit/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
