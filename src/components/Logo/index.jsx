/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"
import {
    Link
} from "react-router"

export default class Logo extends React.Component {
    render() {
        return <Link to="/" className="logo"></Link>
    }
}