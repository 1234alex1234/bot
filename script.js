const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function one() {

  const someNumberFunc = function getRandomInRange() {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  };

  let someNumber = someNumberFunc();
  console.log(someNumber);


  function two() {
    let yourNumber = prompt("Введите число от 1 до 100");

    if (yourNumber == null) {
      alert("Игра окончена!");
    } else if (!isNumber(yourNumber)) {
      alert("это не число!Введите число!");
      two();
    } else if (yourNumber > someNumber) {
      alert("Число больше!");
      two();
    } else if (yourNumber < someNumber) {
      alert("Число меньше!");
      two();
    } else if (yourNumber == someNumber) {
      alert("Вы выйграли!");
    }
  }
  two();
}

one();