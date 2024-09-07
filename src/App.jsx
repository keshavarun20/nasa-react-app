import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {
  const [sidebar ,setSideBar] = useState(false)
  const [data, setData] =useState(null)
  
  function handleToggleModel(){
    setSideBar(!sidebar)
  }
  
  useEffect(()=>{
    const NASA_KEY =import.meta.env.VITE_NASA_API_KEY
    async function fetchAPIData() {
      const url ='https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`
      try{
        const res=await fetch(url)
        const apiData=await res.json()
        setData(apiData)
        console.log(apiData)
      } catch(err){
        console.log(err.message)
      }
    }
    fetchAPIData()

  },[])

  return (
    <>
      {data ? (<Main data={data}/>):(<div className="loadingState"><i className="fa-solid fa-gear"></i></div>)}
      {sidebar && (<SideBar handleToggleModel={handleToggleModel} data={data}/>)}
      {data && (<Footer handleToggleModel={handleToggleModel} data={data}/>)}
    </>
  )
}

export default App
