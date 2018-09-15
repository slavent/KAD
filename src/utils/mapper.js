/**
 * маппинг всех постов
 */
export function mapPosts( data ) {
    let newData = []

    _.filter( data, item => item.categories[ 0 ] === 2 ).map( ( item, i ) => {
        let data = _.pick( _.pick( item, "acf" ).acf, "title", "text_preview", "desc", "photo", "category", "post_file", "presentation_file" )

        data.id = item.id
        newData.push( data )
    } )

    return newData
}

/**
 * маппинг фотографий альбома
 */
export function mapPhotosByAlbumId( data, albumId ) {
    let albums = _.filter( data, item => item.categories[ 0 ] === 3 )
    let album = _.first( _.filter( albums, item => item.id == albumId ) )
    let albumMapped = _.pick( _.pick( album, "acf" ).acf, "photos" ).photos

    return albumMapped
}

/**
 * маппинг портфолио
 */
export function mapPortfolio( data ) {
    return _.pick( data, "acf" ).acf
}

/**
 * маппинг расписания
 */
export function mapSheduler( data ) {
    return _.pick( _.pick( data, "acf" ).acf, "pic" ).pic
}

/**
 * маппинг каникул
 */
export function mapHolidays( data ) {
    return _.pick( _.pick( data, "acf" ).acf, "pic" ).pic
}

/**
 * маппинг полезных ссылок
 */
export function mapLinks( data ) {
    return _.pick( _.pick( data, "acf" ).acf, "desc" ).desc
}

/**
 * маппинг результатов поиска
 */
export function mapSearchResult( data ) {
    let newData = []

    _.map( data, ( item, i ) => {
        let newItem = _.pick( item, "acf" ).acf
        newItem.id = item.id
        newData.push( newItem )
    } )

    return newData
}
