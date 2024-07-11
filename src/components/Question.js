import Options from './Options'
import Button from './Button'

function Question ({
  question,
  index,
  numOfQuestions,
  dispatch,
  hasAnswered,
  clickedOption,
  isCorrect,
  error,
  isDarkmode
}) {
  // console.log(index, numOfQuestions - 1)

  function handleSubmit () {
    if (clickedOption === '') return dispatch({ type: 'checkClickedOption' })
    dispatch({ type: 'submitAnswer', payload: clickedOption })
  }
  function handleNextQuestion () {
    dispatch({ type: 'nextQuestion' })
  }
  function handleFinish () {
    // console.log('finish')
    dispatch({ type: 'finishedQuiz' })
  }
  return (
    <div className='p-5 mb-12 w-full sm:p-10 lg:flex lg:items-start lg:justify-between lg:px-[5rem] z-10 relative'>
      <div className='lg:flex lg:flex-col lg:items-center lg:justify-between lg:gap-28'>
        <div>
          <p
            className={`italic-font text-sm  ${
              isDarkmode ? 'text-[#ABC1E1]' : 'text-[#4c4f55]'
            }`}
          >
            Question {index + 1} of {numOfQuestions}
          </p>
          <p
            className={`text-[#313E51] ${
              isDarkmode ? 'text-white' : 'text-[#313E51]'
            } mt-5 text-xl variable-font sm:text-[32px] font-[450] block sm:leading-8 max-w-[465px]`}
          >
            {question.question}
          </p>
        </div>

        <progress
          className='  w-full progress-bar mt-[40px] max-w-[465px]'
          value={index + 1}
          max={numOfQuestions}
        />
      </div>

      <div className='lg:flex lg:flex-col lg:w-full max-w-[564px]'>
        <Options
          options={question.options}
          dispatch={dispatch}
          hasAnswered={hasAnswered}
          clickedOption={clickedOption}
          isCorrect={isCorrect}
          correctAnswer={question.answer}
          isDarkmode={isDarkmode}
        />

        {!hasAnswered && <Button onClick={handleSubmit}>Submit Answer</Button>}

        {hasAnswered && index !== numOfQuestions - 1 && (
          <Button onClick={handleNextQuestion}>Next Question</Button>
        )}

        {index === numOfQuestions - 1 && hasAnswered && (
          <Button onClick={handleFinish}>Finish</Button>
        )}

        {error && (
          <div className='flex items-center justify-center gap-3'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/icon-error.svg`}
              alt='error-icon'
              className='w-6'
            />
            <p
              className={`rubik-regular ${
                isDarkmode ? 'text-[#F4F6FA]' : 'text-[#EE5454]'
              } `}
            >
              Please select an answer
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Question
