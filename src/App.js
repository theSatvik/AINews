import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import Nav from "./components/NewsCards/Nav";
import Contact from "./components/NewsCards/Contact";
import Details from "./components/NewsCards/Covid/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewNav from "./components/NewsCards/NewNav";
import IndiaDetails from "./components/NewsCards/Covid/IndiaDetails";
import ChatApp from "./components/NewsCards/Chat/ChatApp";
import Chat from "./components/NewsCards/Chat/Chat";
import Sidebar from "./components/NewsCards/Chat/Sidebar";

const alanKey =
  "f6d001c923ec7f29a67c89b5dd359c752e956eca572e1d8b807a3e2338fdd0dc/stage";
  
function App() {
  const [newsArticels, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }
      },
    });
  }, []);

  const Routing = () => {
    return (
      <Switch>
        <Route path="/" exact>
          <NewsCards articles={newsArticels} activeArticle={activeArticle} />
        </Route>

        <Route path="/Covid" exact component={Details} />

        <Route path="/India" component={IndiaDetails} />

        <Route path="/AboutUs" component={Contact} />

        <Route path="/Chat" component={ChatApp} />

        <Route path="/rooms/:roomId" exact component={ChatApp}>
          {/* <Chat /> */}
        </Route>
      </Switch>
    );
  };

  return (
    <div className="main">
      <Router>
        <NewNav />

        <Routing />
      </Router>
    </div>
  );
}

export default App;
