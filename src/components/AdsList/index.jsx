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
                        <div className="ads__item" key={ i }>
                            <div className="ads__title">{ item.title }</div>
                            <div className="ads__desc" dangerouslySetInnerHTML={{ __html: item.desc }}></div>
                            <div className="congrat__splitter">* * *</div>
                        </div>
                    )
                } ) }
            </div>
        )
    }
}