/**
 * @author Kozinetz Svyatoslav
 */
import Layout from "components/Layout"

export default class App extends React.Component {
    render() {
        return <Layout/>
    }
}

ReactDOM.render( <App/>, document.getElementById( "app" ) )