import "./App.css";
import { Route, Routes } from "react-router";
import { AppMenu } from "../Home/Home";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { Closet } from "../Closet/Closet";
import { Details } from "../Details/Details";
import { MyLists } from "../MyLists/MyLists";
import { List } from "../List/List";
import { AddItem } from "../AddItem/AddItem";
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import { AddList } from "../AddList/AddList";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<AppMenu />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/myCloset" element={<Closet />} />
        <Route path="/itemDetails/:id" element={<Details />} />
        <Route path="/lists" element={<MyLists userId={1} />} />
        <Route path="/lists/:id" element={<List />} />
        <Route path="/addList" element={<AddList />} />
      </Routes>
      <Navbar />
    </main>
  );
}

export default App;
