// Binary Search é um algoritmo usado para realizar buscas performáticas em uma lista ordenada.

// O algoritmo funciona da seguinte maneira:
// 1. Encontra o elemento no meio da lista.
// 2. Comparar o elemento que está no meio, com o elemento que buscamos.
// 3. Se o elemento do meio for igual ao valor que estamos procurando, retornamos o índice do elemento do meio.
// 4. Se o elemento do meio for maior que o valor que estamos procurando, repetimos o processo na metade inferior da lista.
// 5. Se o elemento do meio for menor que o valor que estamos procurando, repetimos o processo na metade superior da lista.
// 6. Repetimos esse processo até encontrar o valor que estamos procurando ou até que a lista seja reduzida a zero.

//Exemplo de código:

const list = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

function binarySearch(list, target) {
  let leftPointer = 0;
  let rightPointer = list.length - 1;

  while (leftPointer < rightPointer) {
    const mid = Math.floor((leftPointer + rightPointer) / 2);
    const guess = list[mid];

    if (guess === target) {
      return console.log(mid);
    } else if (guess > target) {
      rightPointer = mid - 1;
    } else {
      leftPointer = mid + 1;
    }
  }
}

//Example will terturn the index of the target:
binarySearch(list, 21);
