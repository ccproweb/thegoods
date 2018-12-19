const Grader = require("./grader.js");

test("Grader throws when ran without a rubric",()=>{
    let bob = new Grader();
    expect(bob.generateScores()).toThrow();
});