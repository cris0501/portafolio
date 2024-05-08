import Cube from '../components/Cube/index.jsx'
import Cubes from '../components/Cubes/index.jsx'
import SNetworks from '../components/SNetworks/index.jsx'

function App() {

  return (
    <div className="h-[100vh]">

      <div className='w-full py-32 bg-gray-600'>
        <div className="flex flex-col md:flex-row justify-center items-center w-full mx-auto my-5">
          <Cube />

          <div className="md:ml-10 w-5/6 md:w-1/3 text-white mt-24 md:my-2">
            <p className="text-5xl font-bold"> Cristian Ramirez </p>
            <p className="text-lg italic">
              Desarrollador Full Stack
            </p>

            <a href="https://drive.google.com/file/d/1LHHP27xxLNhBJs-mv4YvIQkJ-vNbj1uZ/view" target="_blank" className="block my-6">
              <button class="text-lg rounded bg-blue-500 text-white py-2 px-4 font-bold">
                Mi curriculum
              </button>
            </a>

            <p className="text-justify">
              Hola! Soy Cristian, desarrollador full stack, siempre buscando el próximo desafío y emocionado por explorar nuevas 
              fronteras en el mundo digital. Con estudios en física y matemáticas, la lógica es mi aliada en cada proyecto que emprendo.
              <br /><br />  
              Como creyente en el cambio y la innovación, abrazo las metodologías ágiles como Scrum para impulsar la colaboración y la eficiencia
              en cada equipo en el que trabajo. Creo firmemente que la industria está en constante evolución y es nuestra responsabilidad adaptarnos
              y liderar ese cambio.
            </p>

          </div>
        </div>
        <div className="w-2/3 md:w-1/2 mx-auto pt-12 text-white">
          <SNetworks />
        </div>
      </div>

      <div className="flex flex-col w-5/6 mx-auto">
        <div className="flex items-stretch w-full">
          <div className="hidden md:flex flex-1 justify-center items-center pt-16">
            <Cubes />
          </div>

          <div className="flex-2">
            <p className="text-2xl text-center my-5">
            Como desarrollador Full Stack manejo un amplio stack tegnologíco:
            </p>
            <p className="text-xl text-center mt-16 mb-5">
              Frontend
            </p>
            <div className="flex justify-around">
              <i className="text-5xl icon-vue transform cursor-pointer hover:scale-125" ></i>
              <i className="text-5xl icon-react transform cursor-pointer hover:scale-125" ></i>
              <i className="text-5xl icon-html5 transform cursor-pointer hover:scale-125" ></i>
              <i className="text-5xl icon-tailwindcss transform cursor-pointer hover:scale-125" ></i>
              <i className="text-5xl icon-sass transform cursor-pointer hover:scale-125" ></i>
            </div>
            <p className="text-xl text-center mt-16 mb-5">
              Backend
            </p>
            <div className="flex justify-around">
              <i className="text-5xl icon-php transform cursor-pointer hover:scale-125" ></i>
              <i className="text-5xl icon-laravel transform cursor-pointer hover:scale-125" ></i>
              <i className="text-5xl icon-spring transform cursor-pointer hover:scale-125" ></i>
              <i className="text-5xl icon-flask transform cursor-pointer hover:scale-125" ></i>
            </div>
            <p className="text-xl text-center mt-16 mb-5">
              Bases de datos
            </p>
            <div className="flex justify-around">
              <i className="text-5xl icon-mysql transform cursor-pointer hover:scale-125" ></i>
              <i className="text-5xl icon-mongodb transform cursor-pointer hover:scale-125" ></i>
              <i className="text-5xl icon-postgresql transform cursor-pointer hover:scale-125" ></i>
              <i className="text-5xl icon-redis transform cursor-pointer hover:scale-125" ></i>
              <i className="text-5xl icon-apache transform cursor-pointer hover:scale-125" title="HBase"></i>
            </div>
            <p className="text-xl text-center mt-16 mb-5">
              Despliegue (CI)
            </p>
            <div className="flex justify-around pb-8">
              <i className="text-5xl icon-github transform cursor-pointer hover:scale-125" ></i>
              <i className="text-5xl icon-docker transform cursor-pointer hover:scale-125" ></i>
              <i className="text-5xl icon-kubernetes transform cursor-pointer hover:scale-125" ></i>
              <i className="text-5xl icon-jenkins transform cursor-pointer hover:scale-125" ></i>
              <i className="text-5xl icon-groovy transform cursor-pointer hover:scale-125" ></i>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col py-8 mt-8 w-full bg-gray-600 text-white">
        <p className="text-3xl font-bold text-center w-full mb-8">
          Otros proyectos
        </p>

        <div className="flex flex-col w-5/6 md:w-2/3 mx-auto">
          <div className="flex flex-col justify-around items-center mt-4 mb-8">
            <div className="flex">
              <img src="" alt="" />
              <p className="text-lg text-justify">
                Red de comunicación entre microcontroladores Microchip.
                Consiste en una red de tipo malla que funciona con ondas de radio con una Raspberry Pi como getway el cual provee una interfaz
                web desde la que se puede visualizar todos los elementos de la red conectados. Esto nos permite modularidad para agregar nuevos
                elementos a la red. Ademas, se integra una verificación de seguridad para realizar la conexión.
              </p>
            </div>
            <div className="flex justify-around items-center w-full my-4">
              <i className="text-4xl icon-c" />
              <i className="text-4xl icon-arduino" />
              <i className="text-4xl icon-raspberrypi" />
              <i className="text-4xl icon-python" />
            </div>
          </div>
          <div className="flex flex-col justify-around items-center mt-4 mb-8">
            <div className="flex">
              <img src="" alt="" />
              <p className="text-lg text-justify">
                Como freelance, desarrollé un proyecto con Vue que ofrecía un recorrido virtual de las instalaciones de la ESFM (del IPN), similar
                a Google Maps pero en 2D. Este proyecto permitía a los usuarios explorar de manera interactiva el campus y familiarizarse con sus
                diferentes áreas.<br />
                Recientemente, se inicio una actualización significativa del proyecto, llevándolo a una nueva dimensión con un emocionante enfoque
                en 3D. Ahora, el recorrido virtual se ha transformado en un apasionante videojuego que utiliza las tecnologías de Blender y Godot
                para ofrecer una experiencia inmersiva y emocionante para los usuarios. ¡Descubre la ESFM como nunca antes!
              </p>
            </div>
            <div className="flex justify-around items-center w-full my-2">
              <i className="text-4xl icon-godot" />
              <i className="text-4xl icon-blender" />
              <i className="text-4xl icon-vue" />
            </div>
            <div className="flex justify-around items-center w-full mt-2 mb-2">
              <a href="https://recorrido.esfm.ipn.mx" target="_blank">
                <button class="text-lg rounded bg-blue-500 text-white py-2 px-4 font-bold">
                  Conoce el proyecto
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-around items-center mt-4 mb-8">
            <div className="flex">
              <img src="" alt="" />
              <p className="text-lg text-justify">
                Desarrollé una biblioteca virtual con un módulo de LaTeX para renderizar fórmulas matemáticas, como proyecto freelance para la Escuela
                Superior de Física y Matemáticas del IPN (ESFM-IPN). Esta biblioteca, basada en las directrices de la American Physical Society (APS),
                estandariza la elaboración de informes de laboratorio, facilitando su escritura mediante herramientas LaTeX predefinidas y documentación
                explícita.
              </p>
            </div>
            <div className="flex justify-around items-center w-full my-4">
              <i className="text-4xl icon-latex" />
              <i className="text-4xl icon-vue" />
              <i className="text-4xl icon-laravel" />
            </div>
            <div className="flex justify-around items-center w-full mt-2 mb-2">
              <button class="text-lg rounded bg-blue-500 text-white py-2 px-4 font-bold">
                El acceso al proyecto es interno del instituto
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
