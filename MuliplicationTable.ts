const multiplicationTable = function(maxValue: number): string {
    let finalTable: string = '';
  
    for (let xColumn: number = 1; xColumn <= maxValue; xColumn++) {
      for (let yRow: number = 1; yRow <= maxValue; yRow++) {
        finalTable += `${yRow * xColumn} `;
      }
      finalTable += '\n';
    }
  
    return finalTable;
  };
  
  console.log(multiplicationTable(1));
  console.log(multiplicationTable(5));
  console.log(multiplicationTable(10));