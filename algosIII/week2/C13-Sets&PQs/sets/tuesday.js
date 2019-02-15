// Tuesday
// The goal on tuesday is to do 3 things:
// - introduce the idea of unit testing using jest
// - introduce the set interface
// - implement and test a set 

// To this end:
// - Intro to unit testing
//     - why use it?
            // - "guarantee" changed code doesn't change behavior
//     - what is it?
            // - type of test to specify behavior of a 'unit' of code
//     - what is a good test?
//         - fast :D (we'll be running it a lot!)
//         - shouldn't break often (shuold describe something that doesn't change lots)
//         - easy to read & understand
//         - shuold catch the bugs its trying to catch! (cos thats like y we do it, ye?)
//         - effort:coverge ratio is good
// - The Set intreface/class  
//     - what is difference between class and interface? in js?
//     - how to test it?


module.exports = class AlanSet
{
    constructor()
    {
        this.data = new LinkedList();
    }

    add(val) {
        this.data.push(val);
        return this;
    }

    size() {
        return this.data.length();    
    }


    
}