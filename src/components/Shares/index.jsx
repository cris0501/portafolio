import omm from '@/assets/omm.svg'
import dev from '@/assets/esfm_dev.png'
import './style.css'

function Shares (){

  return (
    <div className="flex flex-col md:flex-row justify-around w-full mx-auto p-8 bg-gray-50 md:space-x-5 box">
      <div className="flex justify-center items-center md:flex-col">
        <img src={omm} alt="Mates" className="h-[120px] my-4 block"/>
        <p className="justify w-2/3 mx-auto text-justify">
          Participante de la Olimpiada Hidalguense de Matemáticas obteniendo segundo lugar estatal con mención honorifica
        </p>
      </div>
      {/* <div className="flex justify-center md:flex-col">
        <img src={omm} alt="Mates" className="h-[120px] my-4 block"/>
        <p className="justify w-2/3 mx-auto text-justify">
          Participante estatal de Expo Ciencias Hidalgo, etapa estatal con un proyecto de gestión escolar en JS con jQuery y PHP.
        </p>
      </div> */}
      <div className="flex justify-center items-center md:flex-col">
        <img src={dev} alt="Mates" className="h-[120px] my-4 block"/>
        <p className="justify w-2/3 mx-auto text-justify">
          Director y principal desarrollador de club escolar para el desarrollo de proyectos.
        </p>
      </div>
    </div>
  )

}

export default Shares