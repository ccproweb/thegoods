const {Bencher} = require("./sortBencher");
const retriveAndLoadSorts = require("./sortLoader");
// sorts for testifyin'
const sortingpath = "./sorts"

let sortAlgos = retriveAndLoadSorts(sortingpath);
let testingRig = new Bencher();

testingRig.loadSorts(sortAlgos);

testingRig.judgeSortsByTime(testingRig.genRadnoArr(1000000));