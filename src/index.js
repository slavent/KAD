/**
 * @author Kozinetz Svyatoslav
 */
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from "react-router"
import {
    Provider
} from "react-redux"
import {
    syncHistoryWithStore
} from "react-router-redux"
import configureStore from "stores/configureStore"

import Layout from "components/Layout"
import Main from "screens/Main"
import MyClass from "screens/MyClass"
import Sheduler from "screens/Sheduler"
import Holidays from "screens/Holidays"
import Ads from "screens/Ads"
import Congratulations from "screens/Congratulations"
import Portfolio from "screens/Portfolio"
import Gallery from "screens/Gallery"
import GalleryItem from "screens/Gallery/Item"
import SiteMap from "screens/SiteMap"
import Library from "screens/Library"
import LibraryItem from "screens/Library/Item"
import GuestBook from "screens/GuestBook"
import Links from "screens/Links"
import Search from "screens/Search"

const store = configureStore()
const history = syncHistoryWithStore( browserHistory, store )

ReactDOM.render( (
    <Provider store={ store }>
        <Router history={ browserHistory }>
            <Route path="/" component={ Layout }>
                <IndexRoute component={ Main }/>
                <Route path="my-class" component={ MyClass }/>
                <Route path="my-class/sheduler" component={ Sheduler }/>
                <Route path="my-class/holidays" component={ Holidays }/>
                <Route path="my-class/ads" component={ Ads }/>
                <Route path="my-class/congratulations" component={ Congratulations }/>
                <Route path="portfolio" component={ Portfolio }/>
                <Route path="gallery" component={ Gallery }/>
                <Route path="gallery/item" component={ GalleryItem }/>
                <Route path="sitemap" component={ SiteMap }/>
                <Route path="library" component={ Library }/>
                <Route path="library/:category" component={ Library }/>
                <Route path="post/:id" component={ LibraryItem }/>
                <Route path="guestbook" component={ GuestBook }/>
                <Route path="links" component={ Links }/>
                <Route path="search" component={ Search }/>
                <Route path="*" component={ Main }/>
            </Route>
        </Router>
    </Provider>
), document.getElementById( "app" ) )