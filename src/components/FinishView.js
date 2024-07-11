import Button from './Button'
import LogoAndTitle from './LogoAndTitle'

function FinishView ({ points, subjectPicked, dispatch, isDarkmode }) {
  const { title, icon } = subjectPicked
  function handleClick () {
    dispatch({ type: 'reset' })
  }
  // console.log(subjectPicked)
  return (
    <div className='mt-7 mx-[24px] mb-16 lg:flex w-full lg:items-start lg:justify-between lg:px-[5rem] relative z-10'>
      <p
        className={`text-4xl  variable-font  tracking-wide font-[50]  ${
          isDarkmode ? 'text-white' : 'text-[#313E51]'
        }  mb-[40px] sm:text-[48px] w-full lg:text-5xl `}
      >
        Quiz completed <br />
        <strong className='font-semibold'>You scored...</strong>
      </p>
      <div className=' lg:w-full max-w-[564px]'>
        <div
          className={`h-[242px]  ${
            isDarkmode ? 'bg-[#3B4D66]' : 'bg-white'
          } p-[32px] shadow-xl rounded-xl flex items-center flex-col mb-[12px]`}
        >
          <div className='flex items-center justify-center gap-4 variable-font font-semibold text-[#313E51]'>
            <LogoAndTitle title={title} icon={icon} isDarkmode={isDarkmode} />
          </div>
          <p
            className={`mt-4 rubik-medium text-8xl  ${
              isDarkmode ? 'text-white' : 'text-[#313E51]'
            }`}
          >
            {points}
          </p>
          <p
            className={`${
              isDarkmode ? 'text-[#ABC1E1]' : 'text-[#626C7F]'
            } variable-font font-normal`}
          >
            out of 10
          </p>
        </div>
        <Button onClick={handleClick}>Play Again</Button>
      </div>
    </div>
  )
}

export default FinishView
