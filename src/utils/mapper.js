/**
 * @author Kozinets Svyatoslav
 */

export function mapPosts( data ) {
    let newData = []

    _.filter( data, item => item.categories[ 0 ] === 2 ).map( ( item, i ) => {
        newData.push( _.pick( _.pick( item, "acf" ).acf, "title", "desc", "photo", "category" ) )
    } )

    return newData
}

export function mapAboutMe( data ) {
    return _.pick( _.pick( data, "acf" ).acf, "photo", "desc" )
}

export function mapPhotos( data ) {
    let newData = []

    _.filter( data, item => item.categories[ 0 ] === 3 ).map( ( item, i ) => {
        newData.push( _.pick( _.pick( item, "acf" ).acf, "photos" ) )
    } )

    return newData
}

export function mapPortfolio( data ) {
    return _.pick( data, "acf" ).acf
}