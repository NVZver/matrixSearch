import {
    hasMatrix
} from './has-matrix.js';
import {
    MATRIX_1__10x10,
    SUBMATRIX_1__3x4,
    MATRIX_2__15x15,
    SUBMATRIX_2__2x2,
    MATRIX_3__4x6,
    SUBMATRIX_3__2x2,
    MATRIX_4__7x15,
    SUBMATRIX_4__4x5
} from './test-data/test-data.js';

const assert = require('assert');

describe('Matrix Search ', function () {
    it('should find a submatrix(3x4) in a matrix(10x10)', function () {
        assert.equal(hasMatrix(MATRIX_1__10x10, SUBMATRIX_1__3x4), true);
    });
    it('should not find a submatrix(2x2) in a matrix(15x15)', function () {
        assert.equal(hasMatrix(MATRIX_2__15x15, SUBMATRIX_2__2x2), false);
    });
    it('should find a submatrix(2x2) in a matrix(4x6)', function () {
        assert.equal(hasMatrix(MATRIX_3__4x6, SUBMATRIX_3__2x2), true);
    });
    it('should find a submatrix(4x5) in a matrix(7x15)', function () {
        assert.equal(hasMatrix(MATRIX_4__7x15, SUBMATRIX_4__4x5), true);
    });
});