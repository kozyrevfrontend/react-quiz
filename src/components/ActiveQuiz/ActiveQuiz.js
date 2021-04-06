import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => {
    return(
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>2. </strong>
                    Active Quiz text
                </span>
                <small>
                    2 из 12
                </small>
            </p>
            <AnswersList answers={props.answers} />
        </div>
    )
}

export default ActiveQuiz