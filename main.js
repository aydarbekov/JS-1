console.log('Задание 1');

let x = ['молоко', 'пиво', 'пиво', 'молоко', 'молоко'];
for (let i = 0; i < x.length; i++) {
    // console.log(x[i]);
    if (x[i] === "молоко")
        console.log('good');
    else
        console.log('bad')
}


console.log('Задание 2');

let a = [1, 5, 12, 4, 3];
let b = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let c = [3, 10, 17];

function average(q) {
    let d = 0
    for (let i = 0; i < q.length; i++) {
        d = d + q[i]
    }
    console.log(d/q.length)
    return d/q.length
}

average(a);
average(b);
average(c);


console.log('Задание 3');

function quest(){
    let question = prompt("У квадратного стола отпилили один угол. Сколько теперь углов у него стало?");
    if (question === '5' || question === 'пять')
        alert('Ответ верный');
    else
        alert('Ответ неверный');
}
quest();

console.log('Задание 4');
let Duck = {
    name: "Дональд",
    color: "белый",
    old: 1,
    toStr: function() {console.log(Duck.name,',', Duck.color,',', Duck.old, 'год')},
    say: function() {console.log('кря кря')}
};

Duck.toStr();
Duck.say();

