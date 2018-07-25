class HashTable
{
    constructor(size = 7)
    {
        this.data = new Array(size).fill(new Array());
        this.count = 0;
        this.size = size;
    }

    _hash(string)
    {
        let idx = 0;
        for(let i = 0; i<string.length; i++)
        {
            idx+=(string.charCodeAt(i)*i);
        }
        return idx % this.data.length;
    }
    
    get loadFactor()
    {
        return this.count/this.size;
    }

    add(key, value)
    {

    }

    isEmpty()
    {
        return this.count === 0;
    }

    read(key)
    {

    }

    remove(key)
    {

    }
}

module.exports = HashTable;