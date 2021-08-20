import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WelcomePage from "./pages/WelcomePage";
import ListPage from "./pages/ListPage";
import "./css/styles.css";
// import FormPage from "./pages/FormPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <WelcomePage />
          </Route>
          {/* <Route path="/new-item-form">
            <FormPage />
          </Route> */}
          <Route path="/item-list">
            <ListPage />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
