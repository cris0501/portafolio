import Cube from '../components/Cube/index.jsx'
import Cubes from '../components/Cubes/index.jsx'
import SNetworks from '../components/SNetworks/index.jsx'
import Shares from '../components/Shares/index.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="h-[100vh]">

      <div className='w-full py-32 bg-gray-600'>
        <div className="flex flex-col md:flex-row justify-center items-center w-full mx-auto my-5">
          <Cube />

          <div className="md:ml-10 w-5/6 md:w-1/3 text-white mt-24 md:mt-2">
            <p className="text-5xl font-bold"> Cristian Ramirez </p>
            <p className="text-lg italic">
              Desarrollador semi-senior
            </p>
            <p className="text-lg italic">
              Estudiante de licenciatura en Física y Matemáticas
            </p>
            <p className="text-justify mt-6 text-sm">
              Hola! Soy Cristian, un apasionado de la programación y la tecnología, siempre buscando el próximo desafío y emocionado por explorar
              nuevas fronteras en el mundo digital. Con un trasfondo en física y matemáticas, la lógica es mi aliada en cada proyecto que emprendo.
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

      <div className="mb-10">
        <Shares />
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
            </div>
          </div>
          <div className="flex flex-col justify-around items-center mt-4 mb-8">
            <div className="flex">
              <img src="" alt="" />
              <p className="text-lg text-justify">
                Recorrido virtual de las instalaciones de la Escuela Superior de Física y Matemáticas del IPN. Se desarrollo como un videojuego
                para mejorar la experiencia del usuario. Todo fue diseñado con Blender junto con las texturas y mediante el motor de videojuegos
                Godot, se crea la logica de cada elemento, colisiones y cámaras. Esto ayuda a que estudiantes y aspirantes puedan conocer las
                instalaciones, ubicacion de servicios y más de forma agil e interactiva ya que se provee información acerca de que hace cada
                departamento dentro de la institución, así como el encargado y los medios de informacion con los que se cuentan disponibles.
              </p>
            </div>
            <div className="flex justify-around items-center w-full my-4">
              <i className="text-4xl icon-godot" />
              <i className="text-4xl icon-blender" />
              <i className="text-4xl icon-html5" />
            </div>
          </div>
          <div className="flex flex-col justify-around items-center mt-4 mb-8">
            <div className="flex">
              <img src="" alt="" />
              <p className="text-lg text-justify">
                Biblioteca virtual con un modulo de LaTeX para el renderizado de formulas matemáticas. Para estandarizar el desarrollo y la estructura
                se crearon bibliotecas de libre distribución de LaTeX, las cuales tambien fueron implementadas en la ESFM-IPN para la estandarización de
                los reportes de laboratorio. Esto siguiendo la guia de la APS (American Physical Society) de tal forma que su uso es simple y la documentación
                es explicita.
              </p>
            </div>
            <div className="flex justify-around items-center w-full my-4">
              <i className="text-4xl icon-latex" />
              <i className="text-4xl icon-vue" />
              <i className="text-4xl icon-laravel" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
