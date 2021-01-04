import React from "react";
import { Provider } from "react-redux"
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom"
import Nav from "./components/Nav";
import "materialize-css/dist/css/materialize.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./components/Footer"
import Posts from "./components/posts/PostContainer";
import DetailedPost from "./components/posts/DetailedPost"
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Nav/>
            <Route exact path="/" component={Posts} />
            <Route path="/:id/post" component={DetailedPost}/>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
