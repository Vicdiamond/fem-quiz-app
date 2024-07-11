import OptionContainer from './OptionContainer'
function Options ({
  options,
  dispatch,
  clickedOption,
  hasAnswered,
  isCorrect,
  correctAnswer,
  isDarkmode
}) {
  const optionLetters = ['A', 'B', 'C', 'D']

  const getBorderStyle = currentOption => {
    if (clickedOption === currentOption && !hasAnswered) {
      return 'border-[3px] border-[#a729f5]'
    }
    if (clickedOption === currentOption && isCorrect && hasAnswered) {
      return 'border-[3px] border-[#26D782]'
    }
    if (clickedOption === currentOption && !isCorrect && hasAnswered) {
      return 'border-[3px] border-[#EE5454]'
    }
    return ''
  }

  return (
    <div className='max-w-[564px]'>
      {options.map((option, i) => (
        <OptionContainer
          key={option}
          dispatch={dispatch}
          actionType='pickedOption'
          payload={option}
          borderStyle={getBorderStyle(option)}
          hasAnswered={hasAnswered}
          isDarkmode={isDarkmode}
        >
          <div className='flex items-center justify-between w-full gap-5'>
            <div className='flex items-center gap-5'>
              <p
                className={`${
                  clickedOption === option && isCorrect
                    ? 'bg-[#26D782] text-white'
                    : clickedOption === option && !isCorrect && hasAnswered
                    ? 'bg-[#EE5454] text-white'
                    : 'bg-[#F4F6FA]'
                } flex items-center justify-center rounded-lg w-10 h-10`}
              >
                {optionLetters[i]}
              </p>
              <p
                className={`text-[18px] ${
                  isDarkmode ? 'text-white' : 'text-[#313E51]'
                }`}
              >
                {option}
              </p>
            </div>
            <div className=''>
              <>
                {correctAnswer === option && hasAnswered && (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/icon-correct.svg`}
                    alt='correct icon'
                    className='h-6'
                  />
                )}
                {clickedOption === option &&
                  correctAnswer !== option &&
                  hasAnswered && (
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/icon-incorrect.svg`}
                      alt='correct icon'
                      className='h-6'
                    />
                  )}
              </>
            </div>
          </div>
        </OptionContainer>
      ))}
    </div>
  )
}

export default Options
