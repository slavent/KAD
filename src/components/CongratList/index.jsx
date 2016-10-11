/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"

export default class CongratList extends React.Component {
    render() {
        return (
            <div className="congrat">
                { this.props.data.map( ( item, i ) => {
                    return (
                        <div key={ i } className="congrat__item box">
                            <div className="congrat__title">{ item.title }</div>
                            <div className="congrat__desc" dangerouslySetInnerHTML={{ __html: item.desc }}></div>
                            { item.photo && <div className="congrat__photo"><img src={ item.photo }/></div> }
                        </div>
                    )
                } ) }
            </div>
        )
    }
}