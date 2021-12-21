// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BikesList } from "./Components/Bikes/BikesList";
import Counter from "./Components/Bikes/Counter";
import { DataList } from "./Components/Bikes/DataList";
import Movies from "./Components/Moviess/Movies";
// import { ProductsList } from "./Components/ProductsList";
import { Items } from "./Components/Sales/Items";
import NavBar from "./Components/Bikes/NavBar";
import Watch from "./Components/Watch";

import { Provider } from "react-redux";
import { configStore } from "./State/store/configStore";
import CheckRedux from "./Components/Bikes/CheckRedux";
import ToogleButton from "./Components/InterviewPec/ToogleButton";
function App() {
  const LocalStore = configStore();

  return (
    <div className="App">
      <div>
        <ToogleButton />
      </div>
      <br /> <br /> <br />
      <div>
        <Provider store={LocalStore}>
          {/* <ProductsList /> */}
          {/* <Items/> */}
          {/* <BikesList /> */}
          {/* <Counter /> */}
          {/* <Movies /> */}
          {/* <DataList /> */}
          <Watch/>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<BikesList />} />
              <Route path="/data" element={<DataList />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/redux" element={<CheckRedux />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </div>
  );
}

export default App;
