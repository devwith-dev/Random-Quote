import {BrowserRouter, Route, Routes} from "react-router-dom"
import ShowQuote from "./Components/ShowQuote";
import AddQuote from "./Components/AddQuote";
import UpdateQuote from "./Components/UpdateQuote";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowQuote/>}/>
        <Route path="/new-quote" element={<AddQuote/>}/>
        <Route path="/edit-quote/:id" element={<UpdateQuote/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
