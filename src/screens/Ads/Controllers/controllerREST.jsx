import React from "react"
import * as Mapper from "utils/mapper"
import API from "utils/api"

export default class ControllerREST {
    static getPosts () {
        axios.get( API.GET_POSTS ).then( r => {
            let allPosts = Mapper.mapPosts( r.data )
            let catPosts = ControllerREST.getCategoryPosts.call( this, allPosts )

            this.setState( {
                allPosts,
                catPosts
            } )
        } ).catch( e => console.error( e ) )
    }

    static getCategoryPosts ( data ) {
        return _.filter( data || this.state.allPosts, item => item.category === "Объявления" )
    }
}
