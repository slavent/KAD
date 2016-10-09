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
                        <div className="congrat__item" key={ i }>
                            <div className="congrat__title">{ item.title }</div>
                            <div className="congrat__desc" dangerouslySetInnerHTML={{ __html: item.desc }}></div>
                            <div className="congrat__splitter">* * *</div>
                        </div>
                    )
                } ) }
            </div>
        )
    }
}