// Q1
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

    }

    insert()
    {

    }
}

// Q3
const hashNames = [];
const hashPairs = ["",""];
class HashTable
{
    constructor()
    {

    }
    
    _hash(key)
    {
        let sum = 0;
        for(let c in key)
        {
            sum+=(key.charCodeAt(c)*(c+1))
        }
        return sum;
            
    }

    insert()
    {

    }
}

// Q4
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
