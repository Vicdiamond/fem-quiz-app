function OptionContainer ({
  children,
  dispatch,
  actionType,
  payload,
  borderStyle = '',
  hasAnswered = false,
  isDarkmode
}) {
  function handleClick () {
    dispatch({ type: actionType, payload })
  }

  return (
    <button
      className={` ${
        isDarkmode ? 'bg-[#3B4D66]' : 'bg-white'
      } mb-3 shadow-xl rounded-lg p-3 rubik-medium font-medium text-[#313E51] flex items-center gap-4 text-lg ${borderStyle} w-full`}
      onClick={handleClick}
      disabled={hasAnswered}
    >
      {children}
    </button>
  )
}

export default OptionContainer
