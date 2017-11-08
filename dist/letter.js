'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Letter = function Letter(inputLetter, phrase) {
	undefined.phrase = phrase;
	undefined.character = inputLetter;
	undefined.correctUserGuessArr = [];
	undefined.incorrectUserGuessArr = [];
};
Letter.prototype.displayChar = function (inputLetter, phrase) {
	undefined.loggedPhrase = [];
	undefined.phraseArr = [];

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = phrase[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var chr = _step.value;

			undefined.phraseArr.push(chr);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	if (undefined.correctUserGuessArr.indexOf(inputLetter) > -1 || undefined.incorrectUserGuessArr.indexOf(inputLetter) > -1) {
		console.log('Letter already attempted, please try a new letter');
	} else if (undefined.phraseArr.indexOf(inputLetter) !== -1) {
		undefined.correctUserGuessArr.push(inputLetter);
	} else if (undefined.phraseArr.indexOf(inputLetter) == -1) {
		undefined.incorrectUserGuessArr.push(inputLetter);
	};
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = phrase[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var chr = _step2.value;

			if (undefined.correctUserGuess.indexOf(chr) !== -1) {
				undefined.loggedPhrase.push(undefined.phraseArr[chr]);
			} else {
				undefined.loggedPhrase.push('_ ');
			};
		}
		// for( i = 0; i < this.phraseArr.length; i++) {
		// 	if( this.correctUserGuess.indexOf(i) !== -1 ) {
		// 		this.loggedPhrase.push(this.phraseArr[i]);
		// 	} else {
		// 		this.loggedPhrase.push('_ ');
		// 	};
		// };
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	console.log(undefined.loggedPhrase.join(' '));
};
exports.default = Letter;
//# sourceMappingURL=letter.js.map