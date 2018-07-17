// isEmpty
// add(k,v)
// get(k)
// remove(k)
class HashTable
{
    constructor(size = 7)
    {
        this.data = new Array(size).fill([]);
        this.count = 0;
        this.size = size;
    }

    _hash(string)
    {
        return string.length % this.data.length;
    }
    
    get loadFactor()
    {
        return this.count/this.size;
    }

    add(key, value)
    {

    }
}