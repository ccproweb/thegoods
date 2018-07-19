const Alan = require("./hashTable");

const tables = [Alan];

function testAddSingleSpeed(tables)
{
    let results = [];
    for(let table of tables)
    {
        // arrange
        let bob = new table();
        let start = performance.now();
        // act
        let i = 1000;
        while(i-->0)
        {
            bob.add(i.toString(), "Bob");
        }
        // assert
        let end = performance.now();
        let total = end-start;
        results.push(total);
        console.log(`${table.name} took ${total} milliseconds`);
    }
}

function testAddRemoveSpeed(tables)
{
    let results = [];
    for(let table of tables)
    {
        // arrange
        let bob = new table();
        let start = process.hrtime();
        let i = 10000;
        // act
        while(i-->0){
            let key = i.toString();
            bob.add(key, 'bob');
        }
        while(i++<10000)
        {
            let key = i.toString();
            bob.remove(key)
        }
        let end = process.hrtime();
        let total = getTimeFrom(start,end)
        results.push({
            name: table.name,
            time: total
        })
        console.log('is bob empty?' + bob.isEmpty())
    }
    // assert?
    // console.log(results);
    displayWinner(results);
}

function getTimeFrom(start, end)
{
    return parseFloat(`${end[0]-start[0]}.${end[1]-start[1]}`);
}

function displayWinner(results)
{
    let winner = results[0];
    for(let i = 0; i < results.length; i++)
    {
        if(results[i]['time']<winner['time'])
        {
            winner=results[i];
        }
    }
    console.log("THE WINNER IS.............");
    console.log(winner);
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!");
}


testAddRemoveSpeed(tables);