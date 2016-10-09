/**
 * @author Kozinetz Svytoslav
 */

let monthMap = {
	1: "Январь",
	2: "Февраль",
	3: "Март",
	4: "Апрель",
	5: "Май",
	6: "Июнь",
	7: "Июль",
	8: "Август",
	9: "Сентябрь",
	10: "Октябрь",
	11: "Ноябрь",
	12: "Декабрь"
}

export default class ControllerUI {
	/**
	 * инициализация календаря
	 */
	static init( data ) {
		function Calendar2( id, year, month, data ) {
			var Dlast = new Date( year, month + 1, 0 ).getDate(),
				D = new Date( year, month, Dlast ),
				DNlast = new Date( D.getFullYear(), D.getMonth(), Dlast ).getDay(),
				DNfirst = new Date( D.getFullYear(), D.getMonth(), 1 ).getDay(),
				calendar = '<tr>',
				month = [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ];

			if ( DNfirst != 0 ) {
				for ( var i = 1; i < DNfirst; i++ ) calendar += '<td>';
			} else {
				for ( var i = 0; i < 6; i++ ) calendar += '<td>';
			}

			for ( var i = 1; i <= Dlast; i++ ) {
				if ( i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth() ) {
					calendar += '<td class="today">' + i;
				} else {
					calendar += '<td>' + i;
				}

				if ( new Date( D.getFullYear(), D.getMonth(), i ).getDay() == 0 ) {
					calendar += '<tr>';
				}
			}

			for ( var i = DNlast; i < 7; i++ ) calendar += '<td>&nbsp;';

			document.querySelector( '#' + id + ' tbody' ).innerHTML = calendar;
			document.querySelector( '.datepicker__subtitle' ).innerHTML = month[ D.getMonth() ] + ' ' + D.getFullYear();
			document.querySelector( '.datepicker__subtitle' ).dataset.month = D.getMonth();
			document.querySelector( '.datepicker__subtitle' ).dataset.year = D.getFullYear();

			if ( document.querySelectorAll( '#' + id + ' tbody tr' ).length < 6 ) { // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
				document.querySelector( '#' + id + ' tbody' ).innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
			}

			ControllerUI.highlightDate( data )
		}

		Calendar2( "calendar2", new Date().getFullYear(), new Date().getMonth(), data );

		// переключатель минус месяц
		document.querySelector( '.datepicker__btn-next' ).onclick = function() {
			Calendar2( "calendar2", document.querySelector( '.datepicker__subtitle' ).dataset.year, parseFloat( document.querySelector( '.datepicker__subtitle' ).dataset.month ) - 1, data );
		}

		// переключатель плюс месяц
		document.querySelector( '.datepicker__btn-prev' ).onclick = function() {
			Calendar2( "calendar2", document.querySelector( '.datepicker__subtitle' ).dataset.year, parseFloat( document.querySelector( '.datepicker__subtitle' ).dataset.month ) + 1, data );
		}
	}

	/**
	 * подсветка дней рождений
	 */
	static highlightDate( data ) {
		let $cells = $( ".datepicker td" )
		let monthName = $( ".datepicker__subtitle" ).text().split( " " )[ 0 ]
		let currentMonth = +_.invert( monthMap )[ monthName ]
		let birthDays = []

		data.map( ( item, i ) => {
			let dateArray = item.date.split( "." )
			let number = +dateArray[ 0 ]
			let month = +dateArray[ 1 ]

			month === currentMonth && birthDays.push( {
				number,
				name: item.name,
				sex: item.sex
			} )
		} )

		birthDays.map( ( item, i ) => {
			$cells.each( function( index ) {
				if ( +$( this ).text() === item.number ) {
					let $tooltip = $( "<div class='datepicker__tooltip'/>" )
					let sexClass = item.sex === "м" ? "datepicker__photo-men" : "datepicker__photo-women"

					$tooltip.text( item.name )
					$tooltip.prepend( $( "<div class='datepicker__photo " + sexClass + "'/>" ) )

					$( this ).addClass( "datepicker__bday" )
					$( this ).append( $tooltip )
				}
			} )
		} )

		$cells.hover( function() {
			$( this ).find( ".datepicker__tooltip" ).stop( true ).fadeIn()
		}, function() {
			$( this ).find( ".datepicker__tooltip" ).stop( true ).fadeOut()
		} )
	}
}