function idsInArrayAreUnique(array) {
    let seenIds = new Set(array);
    let matchpercent = seenIds.size/array.length;
    return (matchpercent === 1)
}

    
        let myArray = [
            '662f69469da23014c6ae878e',
            '662f69469da23014c6ae878f',
            '662f69469da23014c6ae8790',
            '662f69469da23014c6ae8791',
            '662f69469da23014c6ae8792',
            '662f69469da23014c6ae8793',
            '662f69469da23014c6ae8794',
            '662f69469da23014c6ae8795',
            '662f69469da23014c6ae8796',
            '662f69469da23014c6ae8797',
            '662f69469da23014c6ae8798',
            '662f69469da23014c6ae8799',
            '662f69469da23014c6ae879a',
            '662f69469da23014c6ae879b',
            '662f69469da23014c6ae879c',
            '662f69469da23014c6ae879d',
            '662f69469da23014c6ae879e',
            '662f69469da23014c6ae879f',
            '662f69469da23014c6ae87a0',
            '662f69469da23014c6ae87a1',
            '662f69469da23014c6ae87a2',
            '662f69469da23014c6ae87a3',
            '662f69469da23014c6ae87a4',
            '662f69469da23014c6ae87a5',
            '662f69469da23014c6ae87a6',
            '662f69469da23014c6ae87a7',
            '662f69469da23014c6ae87a8',
            '662f69469da23014c6ae87a9',
            '662f69469da23014c6ae87aa',
            '662f69469da23014c6ae87ab'
          ];
          let myArrayNotUnique = [
            '662f69469da23014c6ae878e',
            '662f69469da23014c6ae878f',
            '662f69469da23014c6ae8790',
            '662f69469da23014c6ae8791',
            '662f69469da23014c6ae8792',
            '662f69469da23014c6ae8793',
            '662f69469da23014c6ae8794',
            '662f69469da23014c6ae8795',
            '662f69469da23014c6ae8796',
            '662f69469da23014c6ae8797',
            '662f69469da23014c6ae8798',
            '662f69469da23014c6ae8799',
            '662f69469da23014c6ae879a',
            '662f69469da23014c6ae879b',
            '662f69469da23014c6ae879c',
            '662f69469da23014c6ae879d',
            '662f69469da23014c6ae879e',
            '662f69469da23014c6ae879f',
            '662f69469da23014c6ae87a0',
            '662f69469da23014c6ae87a1',
            '662f69469da23014c6ae87a2',
            '662f69469da23014c6ae87a3',
            '662f69469da23014c6ae87a4',
            '662f69469da23014c6ae87a5',
            '662f69469da23014c6ae87a6',
            '662f69469da23014c6ae87a7',
            '662f69469da23014c6ae87a8',
            '662f69469da23014c6ae87a9',
            '662f69469da23014c6ae87aa',
            '662f69469da23014c6ae87aa'
          ];
      console.log(idsInArrayAreUnique(myArray));
      console.log(idsInArrayAreUnique(myArrayNotUnique));
        