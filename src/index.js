import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Layout from "./components/Layout/Layout";
import Main from "./containers/Main";
import Post from "./components/Post/Post";
import About from "./containers/About/About";
import Gallery from "./containers/Gallery/Gallery";
import SiteMap from "./containers/SiteMap/SiteMap";
import Scheduler from "./containers/Shceduler/Shceduler";
import Projects from "./containers/Projects/Projects";

ReactDOM.render(
    <Router>
        <Layout>
            <Switch>
                <Route path="/" exact={true}>
                    <Main/>
                </Route>
                <Route path="/posts/:id">
                    <Post/>
                </Route>
                <Route path="/projects">
                    <Projects/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/scheduler">
                    <Scheduler/>
                </Route>
                <Route path="/gallery">
                    <Gallery/>
                </Route>
                <Route path="/sitemap">
                    <SiteMap/>
                </Route>
            </Switch>
        </Layout>
    </Router>,
    document.getElementById('app')
);