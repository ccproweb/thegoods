module.exports = class Grader
{
    constructor() {
        this.submissions = [];
        this.rubric = null;
    }

    findSubmissions(submissionsLocation) {

    }

    setRubric(rubricLocation) {

    }


    generateScores() {
        if(!this.rubric) {
            throw "Need a Rubric!"
        }

    }
}