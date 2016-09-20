/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"

export default class PostList extends React.Component {
    render() {
        return (
            <div className="posts">
                { this.props.data.map( ( item, i ) => {
                    return (
                        <div key={ i } className="posts__item box">
                            <div className="posts__category">{ item.category }</div>
                            <div className="posts__title">{ item.title }</div>
                            <div className="posts__desc">{ item.desc }</div>
                            <div className="posts__photo"><img src={ item.photo }/></div>
                            <a href="" className="posts__more">читать дальше</a>
                        </div>
                    )
                } ) }
            </div>
        )
    }
}