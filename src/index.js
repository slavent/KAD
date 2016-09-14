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
import Portfolio from "screens/Portfolio"
import Gallery from "screens/Gallery"
import SiteMap from "screens/SiteMap"
import Library from "screens/Library"
import Search from "screens/Search"
import GuestBook from "screens/GuestBook"

ReactDOM.render( (
    <Router history={ browserHistory }>
        <Route path="/" component={ Layout }>
            <IndexRoute component={ Main }/>
            <Route path="portfolio" component={ Portfolio }/>
            <Route path="gallery" component={ Gallery }/>
            <Route path="sitemap" component={ SiteMap }/>
            <Route path="library" component={ Library }/>
            <Route path="search" component={ Search }/>
            <Route path="guestbook" component={ GuestBook }/>
        </Route>
    </Router>
), document.getElementById( "app" ) )