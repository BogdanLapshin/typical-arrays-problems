exports.min = function min(array) {
    try {
        if (array.length == 0) {
            return 0;
        } else {
            let i = array[0];
            for (let x = 0; x < array.length; x++) {
                if (array[x] < i) {
                    i = array[x];
                }
            }
            return i;
        }
    } catch (TypeError) {
        return 0;
    }
}

exports.max = function max(array) {

    try {
        if (array.length == 0) {
            return 0;
        } else {
            let i = array[0];
            for (let x = 0; x < array.length; x++) {
                if (array[x] > i) {
                    i = array[x];
                }
            }
            return i;
        }
    } catch (TypeError) {
        return 0;
    }

}

exports.avg = function avg(array) {
    try {
        if (array.length == 0) {
            return 0;
        } else {
            let sum = 0;
            for (let i = 0; i < array.length; i++) {
                sum += array[i];
            }
            return sum / array.length;
        }
    } catch (TypeError) {
        return 0;
    }
}