import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from "react-router"
import Layout from "components/Layout"
import Main from "screens/Main"
// import Gallery from "screens/Gallery"
// import GalleryItem from "screens/Gallery/Item"
// import SiteMap from "screens/SiteMap"
// import Library from "screens/Library"
// import LibraryItem from "screens/Library/Item"

ReactDOM.render( (
    <Router history={ browserHistory }>
        <Route path="/" component={ Layout }>
            <IndexRoute component={ Main }/>
            { /*<Route path="gallery" component={ Gallery }/>*/ }
            { /*<Route path="gallery/item" component={ GalleryItem }/>*/ }
            { /*<Route path="sitemap" component={ SiteMap }/>*/ }
            { /*<Route path="library" component={ Library }/>*/ }
            { /*<Route path="library/:category" component={ Library }/>*/ }
            { /*<Route path="post/:id" component={ LibraryItem }/>*/ }
            <Route path="*" component={ Main }/>
        </Route>
    </Router>
), document.getElementById( "app" ) )
