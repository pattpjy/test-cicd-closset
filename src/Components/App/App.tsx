import './App.css'
import { Route, Routes } from "react-router"
import { Home } from "../Home/Home"
import { PageNotFound } from "../PageNotFound/PageNotFound"
import { Closet } from "../Closet/Closet"
import { Details } from "../Details/Details"
import { MyLists } from "../MyLists/MyLists"
import { List } from "../List/List"

function App() {
 

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/api/v1/users/:id/items" element={<Closet />} />
        <Route path="/api/v1/users/:id/items/:id" element={<Details />} />
        <Route path="/api/v1/users/:id/lists" element={<MyLists />} />
        <Route path="/api/v1/users/:id/lists/:id" element={<List />} />
      </Routes>
    </main>
  )
}

export default App
