function LogoAndTitle ({ title, icon, isDarkmode }) {
  const getBackgroundClass = title => {
    switch (title) {
      case 'HTML':
        return 'bg-[#FFF1E9]'
      case 'CSS':
        return 'bg-[#E0FDEF]'
      case 'JavaScript':
        return 'bg-[#EBF0FF]'
      case 'Accessibility':
        return 'bg-[#F6E7FF]'
      default:
        return ''
    }
  }
  // console.log(isDarkmode)
  return (
    <>
      <div className={`${getBackgroundClass(title)} p-2 rounded-lg z-10`}>
        <img src={icon} alt={`${title} icon`} className='h-6' />
      </div>
      <p className={`${isDarkmode ? 'text-white' : 'text-[#313E51]'} z-10`}>
        {title}
      </p>
    </>
  )
}

export default LogoAndTitle
