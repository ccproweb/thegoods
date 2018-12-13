module.exports = class PriorityQueue
{
    constructor(){
        this.data = null;
        this.count = 0;
    }

    isEmpty()
    {
        return this.count === 0;
    }

    add(element)
    {
        if(element.hasOwnProperty("priority"))
        {
            if(!Number.isInteger(element.priority))
            {
                throw "Invaled element priority"
            }
        }else{
            throw "element needs a priority"
        }
        this.count++;
    }

    size()
    {
        return this.count;
    }
}