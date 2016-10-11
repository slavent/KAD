/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"

export default class AdsList extends React.Component {
    render() {
        return (
            <div className="ads">
                { this.props.data.map( ( item, i ) => {
                    return (
                        <div key={ i } className="ads__item box">
                            <div className="ads__title">{ item.title }</div>
                            <div className="ads__desc" dangerouslySetInnerHTML={{ __html: item.desc }}></div>
                            { item.photo && <div className="ads__photo"><img src={ item.photo }/></div> }
                        </div>
                    )
                } ) }
            </div>
        )
    }
}