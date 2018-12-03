class StopWatch
{
    _start
    _end

    constructor()
    {

    }

    calcTime(start,end)
    {

    }

    start()
    {
        this._start = process.hrtime();
    }
}

class Bencher
{
    constructor()
    {
        this._sorts = [];
    }

    loadSorts(sortingAlgorithms)
    {
        this._sorts.concat(sortingAlgorithms);
    }

    calcTime(start, end)
    {
        return parseFloat(`${end[0]-start[0]}.${end[1]-start[1]}`);
    }

    timeASort(sort, arr)
    {
        let start = process.hrtime();
        sort(arr);
        let end = process.hrtime();
        return {
            name: sort.name,
            time: calcTime(start,end)
        }
    }

    chooseWinner(sortInfoArray)
    {
        return sortInfoArray.reduce((prev, cur)=>prev['time']>cur['time']?cur:prev);
    }

    genRadnoArr(size=10)
    {
        return new Array(size).fill(size).map(v=>Math.floor(Math.random()*size+1));
    }

    timeABunchOfSorts(sorts)
    {
        let bob = genRadnoArr();
        let res = [];
        for(let sort of sorts)
        {
            res.push(timeASort(sort, bob.slice()));
        }
        return chooseWinner(res);
    }

}

module.exports = {Bencher};