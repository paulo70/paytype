import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Details from '../Pages/Details'
const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Index