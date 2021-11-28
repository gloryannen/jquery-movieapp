// list of movies
let movieList = [];

$(document).ready(function() {
	$('#movie-form').submit(function(e) {
		e.preventDefault();

		let title = $('#movie-title-input').val();
		let rating = $('#movie-rating-input').val();

		// add movies to end of the list
		$('.movie-list tbody tr').last().after(
			'<tr>' +
				'<td class="movie-title">' +
				title +
				'</td>' +
				'<td>' +
				rating +
				'</td>' +
				'<td>' +
				// add class to button to remove later
				'<button class="del-btn"> X </button>' +
				'</td>' +
				'</tr>'
		);

		// set fields to empty string when form is submitted
		$('#movie-form').trigger('reset');
	});

	// remove movie from list by clicking on X button
	$('#movie-list-container').on('click', '.del-btn', function() {
		$(this).closest('tr').remove();
	});
});
