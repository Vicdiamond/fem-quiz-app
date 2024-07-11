function Buttons ({ children, onClick }) {
  return (
    <button
      className='bg-purple-500 mb-5 rounded-lg p-3 variable-font font-medium text-white flex items-center justify-center text-lg w-full max-w-[564px] lg:mt-[32px]'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Buttons
