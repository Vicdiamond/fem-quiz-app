import LogoAndTitle from './LogoAndTitle'
import OptionContainer from './OptionContainer'

function StartMenu ({ quizzes, dispatch, isDarkmode }) {
  return (
    <div className='z-10 relative px-5 mt-2 mb-32 w-full sm:px-10 lg:flex lg:items-start lg:justify-around '>
      <div className='max-w-[465px]'>
        <header
          className={`text-4xl variable-font tracking-wide font-[50] ${
            isDarkmode ? 'text-white' : 'text-[#313E51] '
          }  w-full sm:text-5xl `}
        >
          Welcome to the
          <br />
          <strong className='font-semibold'>Frontend Quiz!</strong>
        </header>
        <p
          className={`italic-font mt-5 ${
            isDarkmode ? 'text-[#ABC1E1]' : 'text-[#626C7F]'
          }  mb-8 text-sm lg:mt-[48px]`}
        >
          pick a subject to get started.
        </p>
      </div>
      <div className='lg:w-full lg:max-w-[564px] sm:max-w-[500px]'>
        {quizzes.map(quiz => (
          <OptionContainer
            key={quiz.title}
            dispatch={dispatch}
            actionType='pickSubject'
            payload={quiz}
            clickedOption={''}
            isDarkmode={isDarkmode}
          >
            <LogoAndTitle
              title={quiz.title}
              icon={quiz.icon}
              isDarkmode={isDarkmode}
            />
          </OptionContainer>
        ))}
      </div>
    </div>
  )
}
//

export default StartMenu
