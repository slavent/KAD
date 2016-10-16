/**
 * @author: Kozinets Svyatoslav
 */
import React from "react"
import "./style.scss"
import {
    Link
} from "react-router"

export default class PostList extends React.Component {
    componentDidMount() {
        let $window = $( window )
        let $btn = $( ".posts__btn-top" )

        $window.scroll( function() {
            if ( $( window ).scrollTop() > +$( window ).height() * 2 ) {
                $btn.fadeIn()
            } else {
                $btn.hide()
            }
        } )

        $btn.on( "click", function() {
            $window.scrollTop( 0 )
        } )
    }

    render() {
        return (
            <div className="posts">
                { this.props.data.map( ( item, i ) => {
                    return (
                        <div key={ i } className="posts__item box">
                            <div className="posts__category">{ item.category }</div>
                            <div className="posts__title">
                                <Link to={ "/post/" + item.id }>
                                    { item.title }
                                </Link>
                            </div>
                            <div className="posts__desc" dangerouslySetInnerHTML={{ __html: item.text_preview }}></div>
                            <div className="posts__photo"><Link to={ "/post/" + item.id }><img src={ item.photo }/></Link></div>
                            <Link to={ "/post/" + item.id } className="posts__more">читать дальше</Link>
                        </div>
                    )
                } ) }
                <div className="posts__btn-top">Наверех</div>
            </div>
        )
    }
}