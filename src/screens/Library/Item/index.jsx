import React from "react"
import axios from "axios"
import Loader from "components/Loader"
import Post from "components/Post"
import API from "utils/api"

export default class Item extends React.Component {
    constructor ( props ) {
        super( props )

        this.state = { data: null }
    }

    componentDidMount () {
        let postId = location.href.split( "/" )[ 4 ]

        axios
            .get( API.GET_POST + postId )
            .then( r => this.setState( {
                data: r.data.acf
            } ) )
            .catch( e => console.error( e ) )
    }

    render () {
        return this.state.data ? <Post data={ this.state.data }/> : <Loader/>
    }
}
