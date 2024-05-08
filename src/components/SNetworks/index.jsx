import './style.scss'

function SNetworks (){

  return (
    <div className="flex justify-around w-full mt-12 text-4xl">
      <a href="https://github.com/cris0501">
        <i className="icon-github transform cursor-pointer hover:text-gray-300 hover:scale-125" ></i>
      </a>
      <a href="mailto:cristian050198@outlook.com">
        <i className="icon-gmail transform cursor-pointer hover:text-orange-300 hover:scale-125" ></i>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/cristian-ramirez-178814288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <i className="icon-linkedin transform cursor-pointer hover:text-blue-400 hover:scale-125" ></i>
      </a>
      {/* <i className="icon-youtube transform cursor-pointer hover:text-red-400 hover:scale-125" ></i> */}
    </div>
  )

}

export default SNetworks