/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"

export default class Post extends React.Component {
    render() {
        let {
            photo,
            title,
            category,
            desc,
            post_file,
            presentation_file
        } = this.props.data

        return (
            <div className="post">
                <div className="post__photo" style={{ background: "url(" + photo + ")" }}>
                    <div className="post__title">{ category }: { title }</div>
                </div>
                <div className="post__desc" dangerouslySetInnerHTML={{ __html: desc }}></div>
                { post_file && <a href={ post_file } className="post__download"></a> }
                <div className="post__print" onClick={ window.print }></div>
            </div>
        )
    }
}