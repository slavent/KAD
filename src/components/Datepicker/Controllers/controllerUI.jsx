/**
 * @author Kozinetz Svytoslav
 */

export default class ControllerUI {
	static init() {
		function Calendar2( id, year, month ) {
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
		}

		Calendar2( "calendar2", new Date().getFullYear(), new Date().getMonth() );

		// переключатель минус месяц
		document.querySelector( '.datepicker__btn-next' ).onclick = function() {
			Calendar2( "calendar2", document.querySelector( '.datepicker__subtitle' ).dataset.year, parseFloat( document.querySelector( '.datepicker__subtitle' ).dataset.month ) - 1 );
		}

		// переключатель плюс месяц
		document.querySelector( '.datepicker__btn-prev' ).onclick = function() {
			Calendar2( "calendar2", document.querySelector( '.datepicker__subtitle' ).dataset.year, parseFloat( document.querySelector( '.datepicker__subtitle' ).dataset.month ) + 1 );
		}
	}
}