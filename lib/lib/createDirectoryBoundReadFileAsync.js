'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = createDirectoryBoundReadFileAsync;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function createDirectoryBoundReadFileAsync(readFileAsync, directory) {
	return (() => {
		var _ref = _asyncToGenerator(function* (file, options) {
			file = _path2.default.resolve(directory, file);

			return readFileAsync(file, options);
		});

		function directoryBoundReadFileAsync(_x, _x2) {
			return _ref.apply(this, arguments);
		}

		return directoryBoundReadFileAsync;
	})();
}