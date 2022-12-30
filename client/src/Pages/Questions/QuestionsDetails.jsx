import React from 'react'
import { useParams } from 'react-router-dom'

const QuestionsDetails = () => {

    const {id} = useParams()

    var questionsList = [{
        _id: 1,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questionTitle: "What is a function",
        questionBody: "It meant to be",
        questionTags: ["java", "node.js", "react js", "mongodb"],
        userPosted: "Aria",
        userId: 1,
        askedON: "Jan 1",
        answer: [{
          answerBody: "Answer",
          userAnswered: 'kumar',
          answeredOn: "jan 2",
          userId: 2,
        }]
      },{
        _id: 2,
        upVotes: 3,
        downVotes: 1,
        noOfAnswers: 2,
        questionTitle: "What is a function",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "Aria",
        userId: 2,
        askedON: "Jan 1",
        answer: [{
          answerBody: "Answer",
          userAnswered: 'kumar',
          answeredOn: "jan 2",
          userId: 2,
        }]
      },{
        _id:3,
        upVotes: 5,
        downVotes: 0,
        noOfAnswers: 2,
        questionTitle: "What is a function",
        questionBody: "It meant to be",
        questionTags: ["java", "mongodb"],
        userPosted: "Aria",
        userId: 3,
        askedON: "Jan 1",
        answer: [{
          answerBody: "Answer",
          userAnswered: 'kumar',
          answeredOn: "jan 2",
          userId: 2,
        }]
      }]

  return (
    
    <div className='question-details-page'>
          {
            questionsList === null ?
            <h1>Loading....</h1> :
            <>
               {
                questionsList.filter(question => question._id == id).map(questions => (
                 <div>

                 </div>

                ))
               }
            </>
          }
       
    </div>
  )
}

export default QuestionsDetails