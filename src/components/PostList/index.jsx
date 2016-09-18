/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"
import {
    Link
} from "react-router"

export default class PostList extends React.Component {
    render() {
        return (
            <div>
                { this.props.data.map( ( item, i ) => {
                    return (
                        <div key={ i } className="post-list__item">
                            <div className="post-list__photo">
                                <img src={ item.photo }/>
                            </div>
                            <div className="post-list__right">
                                <div className="post-list__title">{ item.title }</div>
                                <div className="post-list__category">{ item.category }</div>
                                <div className="post-list__desc">{ item.desc }</div>
                                <div className="post-list__readmore">
                                    <Link to={{ pathname: "/library/item", query: { id: item.id } }}>читать далее</Link>
                                </div>
                            </div>
                        </div>
                    ) 
                } ) }
            </div>
        )
    }
}