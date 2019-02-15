const fs = require('fs');
const path = require('path');

class Score
{
    constructor() {
        this.score = null;
    }

    updateScore(information) {

    }
}

class NumberScore extends Score {
    constructor() {
        super();
        this.score = 0;
    }

    updateScore(questionScore) {
        this.score += questionScore;
    }
}

class Submission {
    constructor(submitterName, submissionObject) {
        this.name = submitterName;
        this.submission = submissionObject;
    }
}

class Grader
{
    constructor() {
        this.submissions = [];
        this.rubric = null;
        this.score = new NumberScore();
    }

    buildSubmission(submissionPath, nameExctractor) {
        let submission = fs.readFileSync(submissionPath);
        let name = nameExctractor(submissionPath);
        this.submissions.push(new Submission(name, submission));
    }

    findAndSetSubmissions(submissionsLocation) {
        let submissionDirectory = path.resolve(submissionsLocation);
        console.log(submissionDirectory);
    }

    setRubric(rubricLocation) {
        this.rubric = require(rubricLocation);
    }

    generateScore(submission) {
        if(!this.rubric) {
            throw "Need a Rubric!"
        };
        return this.rubric.grade(submission);
    }


    generateScores() {
        return this.submissions.map(submission=>this.generateScore(submission))
    }
}

// should add some logic where the grader checks to make sure that the submission and rubric 'match'
// also i think we almost to a state where if you have a rubric, submission, and exam we can let the provider
// simply provide them and we just assume/validate they sorta hook up


export default Grader;