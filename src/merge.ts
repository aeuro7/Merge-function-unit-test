export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    let mergedArray: number[] = [...collection_1, ...collection_2, ...collection_3];
    let newArray: number[] = [];

    while (mergedArray.length > 0) {

        let min = Math.min(...mergedArray);
        
        newArray.push(min);
        
        let index = mergedArray.indexOf(min);
        mergedArray.splice(index, 1);
    }

    return newArray;
}



