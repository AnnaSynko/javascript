const a = parseFloat(prompt('Enter a= '));
const b = parseFloat(prompt('Enter b= '));
const c = parseFloat(prompt('Enter c= '));

function calcDiscriminant(a, b, c) {
    return Math.pow(b, 2) - 4 * a * c;
}

const D = calcDiscriminant(a, b, c);
alert('D ='+D);

function solve(a, b, c) {
    let discrim = calcDiscriminant(a, b, c);
    if (discrim > 0) {
        let x1 = (-b + Math.sqrt(discrim)) / (2 * a);
        let x2 = (-b - Math.sqrt(discrim)) / (2 * a);
        return 'x1 = ' + x1 + ' , x2 = ' + x2;

    }
    else if (discrim === 0) {
        let x = -b / (2 * a);
        return 'x = x1 = x2 ' + x;
    }
    else {
        return 'D < 0, quadratic equation has no roots';
    }
}
const solutionQuadraticEquation = solve(a, b, c);
alert(solutionQuadraticEquation);