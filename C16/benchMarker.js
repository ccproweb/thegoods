const tables = [];

function testAddManySpeed(tables)
{
    // arrange
    let info = generateTestDictionary();
}

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
            bob.add("name", "Bob");
            bob.remove("name");
        }
        // assert
        let end = performance.now();
        let total = end-start;
        results.push(total);
        console.log(`${table.name} took ${total} milliseconds`);
    }
}

function generateTestDictionary()
{
    return {}
}