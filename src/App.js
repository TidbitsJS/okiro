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
import BlogPage from "./container/pages/blog/BlogPage";
import AuthorPage from "./container/pages/author/AuthorPage";
import AuthorDetails from "./container/pages/authorDetails/AuthorDetails";
import TagPage from "./container/pages/tags/TagPage";
import TagDetails from "./container/pages/tagDetails/TagDetails";
import NotFound from "./container/notfound/NotFound";
import Features from "./container/pages/features/Features";

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
                <Route exact path="/authors" component={AuthorPage} />
                <Route
                  exact
                  path="/author/:authorName"
                  component={AuthorDetails}
                />
                <Route exact path="/membership" component={MembershipPage} />
                <Route exact path="/features" component={Features} />
                <Route exact path="/article/:id" component={BlogPage} />
                <Route exact path="/tags" component={TagPage} />
                <Route exact path="/tag/:tagName" component={TagDetails} />
                <Route path="*" component={NotFound} />
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
