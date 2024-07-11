import BodyWrapper from './BodyWrapper'
import FinishView from './FinishView'
import Header from './Header'
import Question from './Question'
import StartMenu from './StartMenu'

import { useEffect, useReducer } from 'react'

const initialState = {
  quizzes: [],
  subjectPicked: null,
  index: 0,
  hasAnswered: false,
  points: 0,
  clickedOption: '',
  isCorrect: false,
  error: false,
  isDarkmode: false,

  // ready, active, finish
  status: 'ready'
}

function reducer (state, action) {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, quizzes: action.payload }

    case 'pickSubject':
      return { ...state, subjectPicked: action.payload, status: 'active' }

    case 'pickedOption':
      return {
        ...state,
        clickedOption: action.payload,
        error: false
      }

    case 'checkClickedOption':
      return {
        ...state,
        error: state.clickedOption === '' ? (state.error = true) : state.error
      }

    case 'submitAnswer':
      const curAnsweredQuestion = state.subjectPicked.questions.at(state.index)
      return {
        ...state,
        hasAnswered: true,
        points:
          curAnsweredQuestion.answer === state.clickedOption
            ? state.points + 1
            : state.points,
        isCorrect:
          curAnsweredQuestion.answer === state.clickedOption
            ? (state.isCorrect = true)
            : state.isCorrect
      }

    case 'nextQuestion':
      return {
        ...state,
        index: state.index + 1,
        hasAnswered: false,
        clickedOption: '',
        isCorrect: false
      }

    case 'finishedQuiz':
      return { ...state, status: 'finish' }

    case 'reset':
      return {
        ...initialState,
        quizzes: state.quizzes,
        isDarkmode: state.isDarkmode
      }

    case 'toggleDarkMode':
      return { ...state, isDarkmode: !state.isDarkmode }
    default:
      throw new Error('No action found')
  }
}

function App () {
  const [
    {
      quizzes,
      status,
      subjectPicked,
      index,
      hasAnswered,
      points,
      clickedOption,
      isCorrect,
      error,
      isDarkmode
    },
    dispatch
  ] = useReducer(reducer, initialState)

  const { questions } = subjectPicked !== null ? subjectPicked : ''
  const numOfQuestions = questions?.length

  // console.log(isCorrect)

  // console.log(subjectPicked?.questions?.at(index))

  useEffect(function () {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const { quizzes } = data
        dispatch({ type: 'dataReceived', payload: quizzes })
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div
      className={`overflow-y-hidden  ${
        isDarkmode ? 'bg-[#313E51]' : 'bg-white'
      }`}
    >
      <BodyWrapper isDarkmode={isDarkmode}>
        <Header
          subjectPicked={subjectPicked}
          dispatch={dispatch}
          isDarkmode={isDarkmode}
        />

        {status === 'ready' && (
          <StartMenu
            quizzes={quizzes}
            dispatch={dispatch}
            isDarkmode={isDarkmode}
          />
        )}

        {status === 'active' && (
          <Question
            question={questions[index]}
            numOfQuestions={numOfQuestions}
            index={index}
            dispatch={dispatch}
            hasAnswered={hasAnswered}
            clickedOption={clickedOption}
            isCorrect={isCorrect}
            error={error}
            isDarkmode={isDarkmode}
          />
        )}

        {status === 'finish' && (
          <FinishView
            points={points}
            subjectPicked={subjectPicked}
            dispatch={dispatch}
            isDarkmode={isDarkmode}
          />
        )}
      </BodyWrapper>
    </div>
  )
}

export default App
