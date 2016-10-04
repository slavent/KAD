/**
 * @author Kozinets Svyatoslav
 */

/**
 * маппинг всех постов
 */
export function mapPosts( data ) {
    let newData = []

    _.filter( data, item => item.categories[ 0 ] === 2 ).map( ( item, i ) => {
        let data = _.pick( _.pick( item, "acf" ).acf, "title", "text_preview", "desc", "photo", "category" )
        data.id = item.id

        newData.push( data )
    } )

    return newData
}

/**
 * маппинг поста
 */
export function mapPost( data, postId ) {
    let posts = mapPosts( data )
    let post = _.findWhere( posts, {
        id: +postId
    } )

    return post
}

/**
 * маппинг данных для раздела "Обо мне"
 */
export function mapAboutMe( data ) {
    return _.pick( _.pick( data, "acf" ).acf, "photo", "desc" )
}

/**
 * маппинг альбомов
 */
export function mapPhotos( data ) {
    let newData = []

    _.filter( data, item => item.categories[ 0 ] === 3 ).map( ( item, i ) => {
        let newItem = _.pick( item, "acf" ).acf
        newItem.id = item.id
        newData.push( newItem )
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
 * маппинг учеников
 */
export function mapChildren( data ) {
    let children = _.filter( data, item => item.categories[ 0 ] === 8 )
    let childrenMapped = []

    children.map( ( item, i ) => {
        childrenMapped.push( _.pick( item, "acf" ).acf )
    } )

    return childrenMapped
}

/**
 * маппинг опроса
 */
export function mapPoll( data ) {
    console.log( data )
}