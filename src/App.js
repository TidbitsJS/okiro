import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./container/footer/Footer";
import Header from "./container/header/Header";
import HomePage from "./container/pages/homepage/HomePage";
import MembershipPage from "./container/pages/membership/MembershipPage";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/membership" component={MembershipPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
