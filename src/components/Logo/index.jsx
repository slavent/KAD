import "./style.scss"
import { Link } from "react-router"

export default class Logo extends React.Component {
    render () {
        return (
            <div>
                <Link to="/" className="logo"></Link>
                <Link to="/" className="logo__title"></Link>
            </div>
        )
    }
}
