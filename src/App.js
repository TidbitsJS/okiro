import { AnimatePresence } from "framer-motion";
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
        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/membership" component={MembershipPage} />
          </Switch>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
