/**
 * @author Kozinets Svyatoslav
 */
import holidays from "data/holidays"

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
 * маппинг поста
 */
export function mapPost( data ) {
    return _.pick( data, "acf" ).acf
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
 * маппинг праздников и дней рождений
 */
export function mapDataForDatepicker( data ) {
    let dataMapped = []
    data = _.filter( data, item => item.categories[ 0 ] === 8 )

    data.map( ( item, i ) => {
        dataMapped.push( _.pick( item, "acf" ).acf )
    } )

    holidays.map( ( item, i ) => {
        dataMapped.push( item )
    } )

    return dataMapped
}

/**
 * маппинг опроса
 */
export function mapPoll( data ) {
    console.log( data )
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
 * маппинг поздравлений
 */
export function mapCongratulations( data ) {
    let newData = []

    _.map( data, ( item, i ) => {
        let newItem = _.pick( _.pick( item, "acf" ).acf, "title", "desc" )
        newItem.id = item.id
        newData.push( newItem )
    } )

    return newData
}

/**
 * маппинг объявлений
 */
export function mapAds( data ) {
    let newData = []

    _.map( data, ( item, i ) => {
        let newItem = _.pick( _.pick( item, "acf" ).acf, "title", "desc" )
        newItem.id = item.id
        newData.push( newItem )
    } )

    return newData
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