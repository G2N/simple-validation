(function (factory) {
	"use strict";

	if (typeof define === "function" && define.amd) {
		define(factory);
	}
	else if (typeof module != "undefined" && typeof module.exports != "undefined") {
		module.exports = factory();
	}
	else {
		window.SimpleValidation = factory();
	}
})(function () {
	"use strict";


    function SimpleValidation(el) {
        if(!(el && el.nodeType && el.nodeType === 1)) {
            throw 'SimpleValidation `el` must be an HTMLElement';
        }

        var form = el,
			inputs = el.querySelectorAll('[required]');

		/**
		* Removes the validity class on the element
		*/
		function resetValidityClass(evt) {
			var input = evt.target;
			input.classList.remove('invalid');
		}

		/**
		* Adds a validity class on a element if needed
		*/
		function addValidityClass(evt) {
			var input = evt.target;
			if(!input.validity.valid) {
				input.classList.add('invalid');
			}
		}

		/**
		 * Checks that a field's value matches another one's
		 */
		function validateMatchingField(evt) {
			var input = evt.target,
			selector = '[name='+input.dataset.validationMatches+'], #'+input.dataset.validationMatches,
			message = input.dataset.validationMatchesMessage || 'This field should match',
			match = form.querySelector(selector);

			if(input.value !== match.value) {
				input.setCustomValidity(message);
			}
			else {
				input.setCustomValidity('');
			}
		}

		/**
		 * Checks that a field's value differs from another one's
		 */
		function validateDifferentField(evt) {
			var input = evt.target,
			selector = '[name='+input.dataset.validationDiffer+'], #'+input.dataset.validationDiffer,
			message = input.dataset.validationDifferMessage || 'This field should match',
			match = form.querySelector(selector);

			if(input.value === match.value) {
				input.setCustomValidity(message);
			}
			else {
				input.setCustomValidity('');
			}
		}

        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('focus', resetValidityClass);
            inputs[i].addEventListener('blur', addValidityClass);
            if(inputs[i].dataset.validationMatches) {
                inputs[i].addEventListener('input', validateMatchingField);
            }

			if(inputs[i].dataset.validationDiffer) {
                inputs[i].addEventListener('input', validateDifferentField);
            }
        }
    }

    return SimpleValidation;
});
