// Set Algorithms
// un/ordered x multi/set x intersection|union
// can assume input set type matches output set tupe

function orderedSetIntersection(setOne, setTwo)
{
    let setOneIterator = 0, setTwoIterator = 0;
    let result = [];
    while(setOneIterator<setOne.length || setTwoIterator<setTwo.length)
    {
        if(setOne[setOneIterator] < setTwo[setTwoIterator])
        {
            if(result[result.length-1]<setOne[setOneIterator])
            {
                result.push(setOne[setOneIterator]);
            }
            setOneIterator++;
        }
        else if(setOne[setOneIterator] > setTwo[setTwoIterator])
        {
            if(result[result.length-1]<setTwo[setTwoIterator])
            {
                result.push(setTwo[setTwoIterator]);
            }
            setTwoIterator++;
        }
        else(setOne[setOneIterator] === setTwo[setTwoIterator])
        {
            result.push(setOne[setOneIterator]);
            setOneIterator++;
            setTwoIterator++;
        }
    }
    return result;
}

function unorderedSetIntersection(set1, set2)
{

}

function orderedMultiSetIntersection(set1, set2)
{

}

function unorderedMultiSetIntersection(set1, set2)
{

}

function orderedSetUnion(setOne, setTwo)
{
    
}

function unorderedSetUnion(set1, set2)
{

}

function orderedMultiSetUnion(set1, set2)
{

}

function unorderedMultiSetUnion(set1, set2)
{
    
}