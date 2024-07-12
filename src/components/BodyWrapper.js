// import { Children } from "react";

function BodyWrapper ({ children, isDarkmode }) {
  return (
    <div className={`relative h-screen`}>
      {isDarkmode ? (
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/pattern-background-mobile-dark.svg `}
          alt='background-image'
          className='absolute inset-0 object-cover  sm:hidden'
        />
      ) : (
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/pattern-background-mobile-light.svg `}
          alt='background-image'
          className='absolute inset-0 object-cover  sm:hidden'
        />
      )}

      {isDarkmode ? (
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/pattern-background-tablet-dark.svg`}
          alt='background-image'
          className='sm:block lg:hidden absolute inset-0  w-[21rem]  hidden h-[24rem]'
        />
      ) : (
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/pattern-background-tablet-light.svg`}
          alt='background-image'
          className='sm:block lg:hidden absolute inset-0  w-[21rem]  hidden h-[24rem]'
        />
      )}

      {isDarkmode ? (
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/pattern-background-desktop-dark.svg`}
          alt='background-image'
          className='lg:block absolute     hidden'
        />
      ) : (
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/pattern-background-desktop-light.svg`}
          alt='background-image'
          className='lg:block absolute     hidden'
        />
      )}

      {children}
    </div>
  )
}

export default BodyWrapper
