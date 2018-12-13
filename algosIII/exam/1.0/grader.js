function grader(submissionObject)
{
    let results = {
        "Q1": gradeQ1(submissionObject['Q1']),
        "Q2": gradeQ2(submissionObject['Q2']),
        "Q3": gradeQ3(submissionObject['Q3']),
        "Q4": gradeQ4(submissionObject['Q4']),
        "Q5": gradeQ5(submissionObject['Q5']),
    };
}

function gradeQ1(submission)
{
    let score = 0;
    if(submission){
        if(submission['bubble'].toLowerCase()=="quadratic")
        {
            score+=1;
        }
        if(submission['insertion'].toLowerCase()=="quadratic")
        {
            score+=1;
        }
        if(submission['merge'].toLowerCase()=="quasilinear")
        {
            score+=1;
        }
        if(submission['quick'].toLowerCase()=="quadratic")
        {
            score+=1;
        }else if(submission['quick'].toLowerCase()=="quasilinear"){
            score+=.5;
        }
        if(submission['selection'].toLowerCase()=="quadratic")
        {
            score+=1;
        }

    }
    return score;
}

function gradeQ2(submission)
{
    
}

function gradeQ3(submission)
{
    
}

function gradeQ4(submission)
{
    
}

function gradeQ5(submission)
{
    
}