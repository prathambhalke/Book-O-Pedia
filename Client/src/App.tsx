import './App.css'
import { Home } from '..';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div className='h-screen flex justify-center'>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        limit={10}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />
      <Home />
    </div>
  )
}

export default App
