/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"
import Props from "./props"

export default class TopPosts extends React.Component {
    render() {
        return (
            <div className="top-posts box">
                <div className="top-posts__title">топ посты недели</div>
                { this.props.posts.map( ( item, i ) => {
                    return (
                        <div key={ i } className="top-posts__item">
                            <div className="top-posts__photo"><img src={ item.photo }/></div>
                            <div className="top-posts__subtitle">{ item.title }</div>
                            <div className="top-posts__date">{ item.date }</div>
                        </div>
                    )
                } ) }
            </div>
        )
    }
}

TopPosts.defaultProps = Props