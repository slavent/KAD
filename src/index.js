/**
 * @author Kozinetz Svyatoslav
 */
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from "react-router"
import Layout from "components/Layout"
import Main from "screens/Main"
import MyClass from "screens/MyClass"
import Portfolio from "screens/Portfolio"
import Gallery from "screens/Gallery"
import GalleryItem from "screens/Gallery/Item"
import SiteMap from "screens/SiteMap"
import Library from "screens/Library"
import LibraryItem from "screens/Library/Item"
import GuestBook from "screens/GuestBook"
import Links from "sreens/Links"

ReactDOM.render( (
    <Router history={ browserHistory }>
        <Route path="/" component={ Layout }>
            <IndexRoute component={ Main }/>
            <Route path="my-class" component={ MyClass }/>
            <Route path="portfolio" component={ Portfolio }/>
            <Route path="gallery" component={ Gallery }/>
            <Route path="gallery/item" component={ GalleryItem }/>
            <Route path="sitemap" component={ SiteMap }/>
            <Route path="library" component={ Library }/>
            <Route path="library/:category" component={ Library }/>
            <Route path="library/:category/:item" component={ LibraryItem }/>
            <Route path="guestbook" component={ GuestBook }/>
            <Route path="links" component={ Links }/>
        </Route>
    </Router>
), document.getElementById( "app" ) )