$(function() {
		  (function quantity() {
			var $minus = $(".form-block__minus");
			var $plus = $(".form-block__plus");

			$minus.click(quantityMinus);
			$plus.click(quantityPlus);

			function quantityMinus(event) {
			  event.preventDefault();
			  var $number = $(this).siblings('.form-block__number');
			  if ($number.val() > 0) {
				$number.val(+$number.val() - 1);
			  }
			}

			function quantityPlus(event) {
			  event.preventDefault();
			  var $number = $(this).siblings('.form-block__number');
			  $number.val(+$number.val() + 1);
			}
		  })();
		});