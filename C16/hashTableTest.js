
function canInstantiateTable(HashTable)
{
    // arrange
    let bob = new HashTable();
    // act
    let pass = (bob instanceof HashTable);
    // assert
    console.log(`HashTable can be instantiated: ${pass}`);
    return pass;
}

function canDetectEmptyness(HashTable)
{
    // arrange
    let bob = new HashTable();
    // act
    let res = bob.isEmpty();
    // assert
    let pass = res === true;
    console.log(`A Hash Table can detect emptiness: ${pass}`);
    return pass;
}

function canAdd(HashTable)
{
    // arrange
    let bob = new HashTable(HashTable);
    // act
    bob.add("name", "Alan");
    let res = bob.isEmpty();
    // assert
    let pass = res === false;
    console.log(`A hash Table can add Key, Value pairs: ${pass}`);
    return pass;
}

function canGet(HashTable)
{
    // arrange
    let bob = new HashTable();
    bob.add("name", "Bob");
    // act
    let res = bob.get("name");
    // assert
    let pass = res==="Bob";
    console.log(`A HashTable can get a key's value: ${pass}`);
    return pass;
}

function canRemove(HashTable)
{
    // arrange
    let bob = new HashTable();
    bob.add("name", "Bob");
    // act
    bob.remove("name");
    let res = bob.isEmpty();
    // assert
    let pass = res === true;
    console.log(`A HashTable can remove a key and it's value: ${pass}`);
    return pass;
}

function testATable(HashTable)
{
    let tests = [canInstantiateTable,
                 canDetectEmptyness,
                 canAdd,
                 canGet,
                 canRemove]
    let gucci = true;
    for(let test of tests)
    {
        gucci = gucci & test(HashTable);
    }
    console.log(HashTable);
    return gucci;
}
