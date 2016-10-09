/**
 * @author: Kozinets Svyatoslav
 */
import "./style.scss"

export default class Post extends React.Component {
    render() {
        let {
            photo,
            title,
            desc,
            post_file,
            presentation_file
        } = this.props.data

        return (
            <div className="post">
                <div className="post__photo" style={{ background: "url(" + photo + ")" }}>
                    <div className="post__title">{ title }</div>
                </div>
                <div className="post__desc" dangerouslySetInnerHTML={{ __html: desc }}></div>
                { post_file && <div className="post__download"><a href={ post_file }>Скачать материал</a></div> }
                { presentation_file && <div className="post__download"><a href={ presentation_file }>Скачать презентацию</a></div> }
            </div>
        )
    }
}