import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductImage from './components/ProductImage.jsx'
import plakal from './assets/plakal.jpg'
import AvatarList from './components/AvatarList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Z linku</h1>
    <ProductImage src="https://ocdn.eu/pulscms-transforms/1/tKck9kuTURBXy83MzQ3NjBlZi00N2JiLTQ0NzgtYjM2Yy1hNjRmNTQyNjkwNTQuanBlZ5KVA80Fpc0BJc0Doc0CCpMFzQSwzQJ23gABoTAB" alt="Sample Product" />
    <h1>Z importu</h1>
    <ProductImage src={plakal} alt="Plakal Product" />
    <h1>Z sciezki</h1>
    <ProductImage src={"src/assets/plakal.jpg"} alt="Plakal Product" />
    <AvatarList users={[
      { id: 1, name: 'Pejda', role: 'Ciapak' },
      { id: 2, name: 'Agata', role: 'Zfiata' },
      { id: 3, name: 'Iza', role: 'Zmatiza' },
    ]} />
  </StrictMode>,
)
