import {
    expect,
    should
} from "chai"
import SuperTest from "supertest"
import React from "react"
import PostList from "../src/components/PostList/index.jsx"
import sd from "skin-deep"

let api = SuperTest( "http://peremenka20.ru" )

describe( "API", function() {
    it( "[GET_POSTS]: код ответа 200", done => {
        api.get( "/wp-json/wp/v2/posts" )
            .set( "Accept", "application/json" )
            .expect( "Content-Type", /json/ )
            .expect( 200, done )
            .expect( res => {
                expect( res.body[ 0 ] ).to.have.property( "acf" )
                expect( res.body[ 0 ].acf ).to.not.equal( null )
            } )
    } )

    it( "[GET_ABOUT_ME]: код ответа 200", done => {
        api.get( "/wp-json/acf/v2/page/71" )
            .set( "Accept", "application/json" )
            .expect( 200, done )
            .expect( r => {
                let body = r.body
                let acf = r.body.acf

                expect( body ).to.have.property( "acf" )
                expect( acf ).to.not.equal( null )
                expect( acf ).to.have.property( "photo" )
                expect( acf.photo ).to.not.equal( null )
                expect( acf ).to.have.property( "title" )
                expect( acf.title ).to.not.equal( null )
                expect( acf ).to.have.property( "desc" )
                expect( acf.desc ).to.not.equal( null )
            } )
    } )

    it( "[GET_PORTFOLIO]: код ответа 200", done => {
        api.get( "/wp-json/acf/v2/page/57" )
            .set( "Accept", "application/json" )
            .expect( 200, done )
            .expect( r => {
                let body = r.body
                let acf = r.body.acf

                expect( body ).to.have.property( "acf" )
                expect( acf ).to.not.equal( null )
                expect( acf ).to.have.property( "photo" )
                expect( acf.photo ).to.not.equal( null )
                expect( acf ).to.have.property( "title" )
                expect( acf.title ).to.not.equal( null )
                expect( acf ).to.have.property( "desc" )
                expect( acf.desc ).to.not.equal( null )
            } )
    } )
} )