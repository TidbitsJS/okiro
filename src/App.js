import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./container/footer/Footer";
import Header from "./container/header/Header";
import HomePage from "./container/pages/homepage/HomePage";
import MembershipPage from "./container/pages/membership/MembershipPage";
import SubscribePage from "./container/pages/subscribe/SubscribePage";
import ContactPage from "./container/pages/contact/ContactPage";
import SignUpPage from "./container/pages/signup/SignUpPage";
import SignInPage from "./container/pages/signin/SignInPage";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <AnimatePresence>
          <Switch>
            <Route exact path="/subscribe" component={SubscribePage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/signin" component={SignInPage} />
            <Route>
              <Header />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/membership" component={MembershipPage} />
              </Switch>
              <Footer />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
