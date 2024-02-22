import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home, CreateBook, DeleteBook, EditBook, ShowBook } from "../index"
function App() {
 
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
          <Route path='/books/create' element={<CreateBook />}/>
        <Route path='/books/details/:id' element={<ShowBook />}/>
        <Route path='/books/edit/:id' element={<EditBook />}/>
        <Route path='/books/delete/:id' element={<DeleteBook />}/>
      </Routes>
    </div>
  )
}

export default App
