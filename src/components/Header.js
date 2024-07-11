import LogoAndTitle from './LogoAndTitle'

function Header ({ subjectPicked, dispatch, isDarkmode }) {
  const { title, icon } = subjectPicked === null ? '' : subjectPicked

  console.log(isDarkmode)
  return (
    <div className='p-5 flex justify-between items-center sm:p-10 lg:mx-[5rem] lg:px-0 '>
      <div className='flex items-center gap-4 variable-font font-semibold text-[#313E51]'>
        {subjectPicked === null ? (
          ''
        ) : (
          <LogoAndTitle title={title} icon={icon} isDarkmode={isDarkmode} />
        )}
      </div>
      <div className='flex items-center gap-1'>
        {isDarkmode ? (
          <img
            alt='sun-dark'
            src={`${process.env.PUBLIC_URL}/assets/images/icon-sun-light.svg`}
            className='w-5 z-10'
          />
        ) : (
          <img
            alt='sun-brigth'
            src={`${process.env.PUBLIC_URL}/assets/images/icon-sun-dark.svg`}
            className='w-5 z-10'
          />
        )}
        <div
          className='bg-purple-500 h-5 w-10 px-1 flex items-center rounded-full relative'
          onClick={() => dispatch({ type: 'toggleDarkMode' })}
        >
          {!isDarkmode && (
            <div className='bg-white h-3 w-3 rounded-full animate-slideIn'></div>
          )}
          {isDarkmode && (
            <div className='bg-white h-3 w-3 rounded-full absolute  right-1 animationSlide-slideOut'></div>
          )}
        </div>

        {isDarkmode ? (
          <img
            alt='moon-dark'
            src={`${process.env.PUBLIC_URL}/assets/images/icon-moon-light.svg`}
            className='w-5'
          />
        ) : (
          <img
            alt='moon-brigth'
            src={`${process.env.PUBLIC_URL}/assets/images/icon-moon-dark.svg`}
            className='w-5'
          />
        )}
      </div>
    </div>
  )
}

export default Header
