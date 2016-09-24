/**
 * @author Kozinets Svyatoslav
 */

/**
 * маппинг всех постов
 */
export function mapPosts( data ) {
    let newData = []

    _.filter( data, item => item.categories[ 0 ] === 2 ).map( ( item, i ) => {
        let data = _.pick( _.pick( item, "acf" ).acf, "title", "desc", "photo", "category" )
        data.id = item.id

        newData.push( data )
    } )

    return newData
}

/**
 * маппинг данных для раздела "Обо мне"
 */
export function mapAboutMe( data ) {
    return _.pick( _.pick( data, "acf" ).acf, "photo", "desc" )
}

/**
 * маппинг фотографий
 */
export function mapPhotos( data ) {
    let newData = []

    _.filter( data, item => item.categories[ 0 ] === 3 ).map( ( item, i ) => {
        newData.push( _.pick( _.pick( item, "acf" ).acf, "photos" ) )
    } )

    return newData
}

/**
 * маппинг портфолио
 */
export function mapPortfolio( data ) {
    return _.pick( data, "acf" ).acf
}