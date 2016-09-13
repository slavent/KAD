/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"
import Props from "./props"

export default class NewsList extends React.Component {
    render() {
        return (
            <div className="news">
                { this.props.news.map( ( item, i ) => {
                    return (
                        <div key={ i } className="news__item box">
                            <div className="news__category">{ item.category }</div>
                            <div className="news__title">{ item.title }</div>
                            <div className="news__desc">{ item.desc }</div>
                            <div className="news__photo"><img src={ item.photo }/></div>
                            <a href="" className="news__more">читать дальше</a>
                        </div>
                    )
                } ) }
            </div>
        )
    }
}

NewsList.defaultProps = Props