import { useState } from 'react'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Header from './components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center gap-7'>
        <div>
          <h1 className='text-4xl font-bold mb-8'>CV Application</h1>
          <div className="">
            <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </Button>
            <Button variant="outlined" style={{marginLeft: 5, color: "red"}} onClick={() => setCount(0)}>
              Reset
            </Button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
        </div>
        <Paper square elevation={8} className='' style={{
          minWidth: "50rem",
          minHeight: "70rem"
        }}>
          <Header/>
        </Paper>
      </div>
    </>
  )
}

export default App
