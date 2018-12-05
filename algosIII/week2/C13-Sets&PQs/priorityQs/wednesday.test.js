// Expected Priority Queue Interface tests
// Priority Queue spec
const PriorityQueue = require("./wednesday.js");
// methods and behaviors from JAVA

class DummyPQNode
{
    constructor(priority, data)
    {
        this.priority = priority;
        this.data = data;
    }
}

pqElement = (p) => new DummyPQNode(p);

// constructors...
test("PriorityQueue class can be instantiated",()=>{
    expect(new PriorityQueue()).toBeInstanceOf(PriorityQueue)
})

// methods...
// .isEmpty()
test("Can detect is empty",()=>{
    expect(new PriorityQueue().isEmpty()).toBeTruthy()
})

test("Can determine it isn't empty", ()=>{
    let rob = new PriorityQueue();
    rob.add(1);
    expect(rob.isEmpty()).toBeFalsy();
})
// .size()
test("Can return size when instantiated", ()=>{
    expect(new PriorityQueue().size()).toBe(0);
})

test.each([
    [[pqElement(1),pqElement(2),pqElement(3),pqElement(4),pqElement(5)], 5], // elements to be added, expected size
    [[pqElement(1),pqElement(2),pqElement(3)], 3],
    [[pqElement(1)], 1]
])("Correctly calculates size after multiple elements are added", (elements, expectedSize)=>{
    let rob = new PriorityQueue();
    elements.forEach(element => {
        rob.add(element);
    });
    expect(rob.size()).toBe(expectedSize)
})
// .add(e)
test("PriorityQueue can add an element",()=>{
    let rob = new PriorityQueue();
    rob.add(pqElement(1));
    expect(rob.size()).toBe(1);
})

test("PriorityQueue throws an exception when element without priority is added", ()=>{
    let rob = new PriorityQueue();
    expect(rob.add(1)).toThrow("invalid input priority")
})

test("Can add different priority levles correctly", ()=>{
    let rob = new PriorityQueue();
    rob.add(pqElement(1));
    rob.add(pqElement(2));
    rob.add(pqElement(1));
    expect(rob.offer().priority).toBe(1);
    expect(rob.offer().priority).toBe(1);
    expect(rob.offer().priority).toBe(2);
})

test("Same priority level elements are stored/used in order they were added", () => {
    let rob = new PriorityQueue();
    rob.add(pqElement(1, "alpha"));
    rob.add(pqElement(1, "beta"));
    expect(rob.offer().data).toBe('alpha');
    expect(rob.offer().data).toBe('beta');
})

// .offer() // 'dequeues' the next element

// .clear()
// .comparator()
// .conatins(e)
// .iterator()
// .peek()
// .poll()
// .remove()
// .toArray()
// .addAll()
// .removeAll()
// .equals()

