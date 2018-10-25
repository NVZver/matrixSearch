const hasMatrix = function (matrix, subMatrix) {
    let isMatrixFound = false;
    if (!matrix || !subMatrix || matrix.length === 0 || subMatrix.lenth === 0) {
        throw (new Error('Invalid data'));
    }
    const endRow = matrix.length - subMatrix.length;
    const endCol = matrix[0].length - subMatrix[0].length;

    for (let startRow = 0; startRow <= endRow; startRow++) {
        if (isMatrixFound) {
            break;
        }

        for (let startCol = 0; startCol <= endCol; startCol++) {
            if (isMatrixFound) {
                break;
            }
            let subMatrixId = 0;
            const sliceTo = startCol + subMatrix[subMatrixId].length;
            const testRow = matrix[startRow].slice(startCol, sliceTo);
            if (testRow === subMatrix[subMatrixId]) {
                subMatrixId++;
                for (let nextRow = startRow + 1; nextRow < matrix.length; nextRow++) {
                    const nextTestRow = matrix[nextRow].slice(startCol, sliceTo);
                    if (nextTestRow === subMatrix[subMatrixId]) {
                        if (subMatrixId + 1 === subMatrix.length) {
                            isMatrixFound = true;
                            break;
                        } else {
                            subMatrixId++;
                        }
                    } else {
                        break;
                    }
                }
            }
        }
    }

    return isMatrixFound;
}


export {
    hasMatrix
};