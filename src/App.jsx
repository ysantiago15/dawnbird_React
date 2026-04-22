import '../src/style/tailwind.css'
import './App.css'
import AppRouter from "./router/AppRouter"

function App() {


  return (
    <div className='flex flex-col w-full min-h-screen box-border'>

      <AppRouter />

    </div>
  )
}

export default App

