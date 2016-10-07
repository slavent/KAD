/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"

export default class Loader extends React.Component {
    render() {
        return (
            <div className="cssload-thecube">
                <div className="cssload-cube cssload-c1"></div>
                <div className="cssload-cube cssload-c2"></div>
                <div className="cssload-cube cssload-c4"></div>
                <div className="cssload-cube cssload-c3"></div>
            </div>
        )
    }
}