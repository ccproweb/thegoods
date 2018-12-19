// SUBMIT THIS FILE NAMED yournameEXAM.js
// ex. alanEXAM.js




// Q1 - use the written name of the time complexity!
const bubble    = "";
const insertion = "";
const merge     = "";
const quick     = "";
const selection = "";

// Q2
class Heap
{
    constructor()
    {
        this.data = [];
    }

    insert(val)//assume to be a number
    {

    }
}

// Q3 - make sure to include quotes for the names
const hashNames = [];
const hashPairs = ["",""];
class HashTable
{
    constructor()
    {

    }

    hash(key)
    {
        return 1 + key.reduce(
            (tot, char)=> tot+idx*char.charCodeAt(0)
        );
    }

    insert()
    {

    }
}

// Q4 - RETURN the sorted array!
function Sort(arr)
{

}

// Q5
function CoinChanger(amt, legend)
{

}


module.exports = {
    "Q1": {
        'bubble': bubble,
        'insertion': insertion,
        'merge': merge,
        'quick': quick,
        'selection': selection,
    },
    "Q2": Heap,
    "Q3": {
        "names": hashNames,
        "pairs": hashPairs,
        "table": HashTable
    },
    "Q4": Sort,
    "Q5": CoinChanger
}