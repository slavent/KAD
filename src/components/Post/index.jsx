/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"

export default class Post extends React.Component {
    render() {
        let {
            photo,
            title,
            desc
        } = this.props.data

        return (
            <div className="post">
                <div className="post__photo" style={{ background: "url(" + photo + ")" }}>
                    <div className="post__title">{ title }</div>
                </div>
                <div className="post__desc">{ desc }</div>
            </div>
        )
    }
}