const BSTNode = require("./BSTNode.js");
const BST = require("./BST.js");
// Binary search Tree Tests!

// Constructor biz
test("Can make a BST!", ()=>{
    let bob = new BST();
    expect(bob).toBeInstanceOf(BST);
});

// MAINTENANCE METHODS
// isEmpty
test("BST can detect is empty when constructed", ()=>{
    let bob = new BST();
    expect(bob.isEmpty()).toBeTruthy();
});

test("BST can figure out it isn't empty after having added something", ()=>{
    let bob = new BST();
    bob.add(1);
    expect(bob.isEmpty()).toBeFalsy()
})

// size
test("BST size detects 0 when newly constructed", ()=>{
    let bob = new BST();
    expect(bob.size).toBe(0);
})

test.each(
    [
        [[],0],
        [[55],1],
        [[1,2,3,4,5],5],
        [[1,2,3,4,5,6,7,8,9],9]
    ]
)("BST adds values: %p and has correct size: %i", (inputList, expectedSize)=>{
    let rob = new BST();
    inputList.forEach(el => rob.add(el));
    expect(rob.size).toBe(expectedSize);
});

// add
// test("BST throws an exception if input doesn't have a value", ()=>{
//     let rob = new BST();
//     expect(()=>{
//         rob.add(1);
//     }).toThrow();
// })

test("Empty BST can add a val and then have a root!", () => {
    let rob = new BST();
    rob.add(1);
    expect(rob.root).toBeInstanceOf(BSTNode);
});

test("BST can add three things to the right spot", ()=>{
    let rob = new BST();
    rob.add(10);
    rob.add(5);
    rob.add(15);
    expect(rob.root).toBeInstanceOf(BSTNode);
    expect(rob.root.left).toBeInstanceOf(BSTNode);
    expect(rob.root.right).toBeInstanceOf(BSTNode);
});

test("BST can add 5 things to the right spot", ()=>{
    let rob = new BST();
    rob.add(10);
    rob.add(5);
    rob.add(15);
    rob.add(7);
    rob.add(13);
    expect(rob.root).toBeInstanceOf(BSTNode);
    expect(rob.root.left).toBeInstanceOf(BSTNode);
    expect(rob.root.right).toBeInstanceOf(BSTNode);
    expect(rob.root.left.right).toBeInstanceOf(BSTNode);
    expect(rob.root.right.left).toBeInstanceOf(BSTNode);
});

test("BST can add 7 things to the right spot", ()=>{
    let rob = new BST();
    rob.add(10);
    rob.add(5);
    rob.add(15);
    rob.add(7);
    rob.add(13);
    rob.add(3);
    rob.add(18);
    expect(rob.root).toBeInstanceOf(BSTNode);
    expect(rob.root.left).toBeInstanceOf(BSTNode);
    expect(rob.root.right).toBeInstanceOf(BSTNode);
    expect(rob.root.left.right).toBeInstanceOf(BSTNode);
    expect(rob.root.right.left).toBeInstanceOf(BSTNode);
    expect(rob.root.left.left).toBeInstanceOf(BSTNode);
    expect(rob.root.right.right).toBeInstanceOf(BSTNode);
});

// contains
test("BST can detect a thing it added correctly", ()=>{
    let rob = new BST();
    rob.add(1);
    expect(rob.contains(1)).toBeTruthy();
});

test("BST can add many things and stillll detect someting", ()=>{

});

// remove

// isValid

// removeAll

// setAdd

// max
test("",()=>{})

//min

//height

// balanced

// fromArray


// closest common ancestor

// TRAVERSALS
// pre/post/in

// toArray

// min height

// valBefore/after

// nodeBefore/after

// closest value

// contains pathSum


// APPLIED BIZ