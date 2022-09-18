console.log('loaded');

const weightConvertor = (function () {

    function gramsToKg(g) {
        return g / 1000;
    }

    function gramsToMg(g) {
        return g * 1000;
    }

    function kgToGrams(k) {
        return k * 1000;
    }

    function kgToMg(k) {
        return k * 1000 * 1000;
    }

    function mgToGrams(m) {
        return m / 1000;
    }

    function mgToKg(m) {
        return m / 1000 / 1000;
    }

    return { gramsToKg, gramsToMg, kgToGrams, kgToMg, mgToGrams, mgToKg }
})();

let mgs = weightConvertor.gramsToMg(42);
console.log(mgs);
let kgs = weightConvertor.gramsToKg(42);
console.log(kgs);



