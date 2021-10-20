import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Layout from "./components/Layout/Layout";
import Main from "./screens/Main";
import Post from "./components/Post/Post";
import About from "./screens/About/About";
import Gallery from "./screens/Gallery/Gallery";
import SiteMap from "./screens/SiteMap/SiteMap";
import Scheduler from "./screens/Shceduler/Shceduler";
import Projects from "./screens/Projects/Projects";

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