import './App.css';
import { Routes, Route, } from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import Main from './component/Main/Main';
import { checkUser } from './component/redux/actions/userAC';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AuthUser from './component/ProtectedAuth/AuthUser'
import SignInForm from './component/SignInForm/SignInForm'
import Form from './component/Form/Form';
import { getTodoFromServer } from './component/redux/actions/todosAC';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUser())
    dispatch(getTodoFromServer())
  }, [])

  return (
    <div className="App">
      <Navbar />

      <div className='wrapper'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signin' element={
            <AuthUser>
              <SignInForm />
            </AuthUser>} />
          <Route path='/addTodo' element={<Form />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
