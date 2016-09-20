/**
 * @author Kozinets Svyatoslav
 */

export function mapPosts( data ) {
    let newData = []

    data.map( ( item, i ) => {
        newData.push( _.pick( _.pick( item, "acf" ).acf, "title", "desc", "photo", "category" ) )
    } )

    return newData
}