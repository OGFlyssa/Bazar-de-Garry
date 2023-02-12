import { useState } from 'react'
import Nav from './Components/Nav.jsx'
import BannerAdvertisement from './Components/BannerAdvertisement.jsx'
import './App.css'

function App() {

  return (
    <main>
<Nav/>
<BannerAdvertisement
images = {[
  "https://i.postimg.cc/t7Q8pYG6/chin-chong-chin-cat.jpg",
"https://i.postimg.cc/k5gJkhcm/corolla-90.jpg",
"https://i.postimg.cc/tT1XgZwv/Vaporwave-Middle-1146479352.jpg"]}

redirectLinks ={[
  "https://postimg.cc/9wbLBXMX",
  "https://postimg.cc/PC0nDy93",
  "https://postimg.cc/Fd4tWR90"
  ]}
/>
</main>
  )
}

export default App
