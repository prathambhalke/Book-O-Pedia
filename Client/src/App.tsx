import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home, CreateBook, DeleteBook, EditBook, ShowBook } from "../index"
import { ToastContainer } from 'react-toastify';
function App() {
 
  return (
    <div className='h-screen flex justify-center'>
      <Routes>
        <Route path='/' element={<Home />}/>
          <Route path='/books/create' element={<CreateBook />}/>
        <Route path='/books/details/:id' element={<ShowBook />}/>
        <Route path='/books/edit/:id' element={<EditBook />}/>
        <Route path='/books/delete/:id' element={<DeleteBook />}/>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
