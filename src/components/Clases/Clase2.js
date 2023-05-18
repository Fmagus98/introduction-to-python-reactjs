import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Clase2 = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="index">
      < section className="section-index container" >
        <div className="row">
          <div className="col mt-4 mb-4"></div>
          <div className="mb-4 mt-4"></div>
          <div className="grid-item mt-4 mb-2">
            <h1 className="text-center">
              Clase 2: Variables y operadores
            </h1>
          </div>
          <div className="col mt-4"></div>
        </div>
        <div className="row">
          <div className="col mt-4"></div>
          <div className="text-center grid-item mt-4 px-4">
            <ul className="intr-ul">
              <li className="card-text text-center" style={{ fontSize: "1.3vw" }}>Variables y tipos de datos en Python</li>
              <li className="card-text text-center" style={{ fontSize: "1.3vw" }}>Operadores aritméticos, de asignación y comparación</li>
              <li className="card-text text-center" style={{ fontSize: "1.3vw" }}>Métodos y conversion de tipos de datos</li>
            </ul>
          </div>
          <div className="col mt-4"></div>
        </div>
      </section>
      <section className="intr">
        <img className="wave" alt="" src='../img/wave.png' />
        <h2 data-aos="flip-left" className="h2-c text-center mx-auto">Contenido</h2>
        <div className="accordion accordion-flush w-75 mx-auto  " id="accordionFlushExample">
          <div className="accordion-item bg-transparent">
            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
              <h2 data-aos="fade-right" className="text-light">Variables</h2>
            </button>
            <div id="a1" className="accordion-collapse collapse text-light" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-light">
                <p className="text-center mx-auto w-75">En el contexto de la programación, una variable es un contenedor para almacenar y manipular datos. Imagina una variable como una caja etiquetada en la memoria del equipo, donde puedes guardar diferentes tipos de información, como números, texto o valores booleanos. En un programa, puedes declarar una variable y asignarle un valor para luego utilizarlo en diferentes partes del código.</p>
                <p className="text-center mx-auto w-75">Cuando declaras una variable en un lenguaje de programación, se reserva un espacio en la memoria para almacenar su valor. La ubicación exacta en la memoria puede variar dependiendo del lenguaje y del entorno de ejecución. Sin embargo, el proceso general para acceder al valor de una variable implica el uso de la CPU y la RAM del equipo.</p>
                <h2 className="text-center mx-auto">Funcionamiento de hardware</h2>
                <p className="text-center mx-auto w-75">CPU (Unidad Central de Procesamiento): La CPU es el componente principal del hardware que ejecuta las instrucciones de un programa. Cuando accedes a una variable, la CPU utiliza registros internos para almacenar temporalmente el valor de la variable que se va a procesar. Los registros son ubicaciones de memoria extremadamente rápidas y cercanas a la CPU, lo que permite un acceso más rápido a los datos.</p>
                <p className="text-center mx-auto w-75">RAM (Memoria de Acceso Aleatorio): La RAM es un tipo de memoria de almacenamiento temporal que almacena tanto el programa en ejecución como los datos necesarios para el programa. Cuando se necesita el valor de una variable, la CPU busca en la RAM la ubicación de memoria reservada para esa variable y recupera el valor almacenado allí. Esto implica acceder a la dirección de memoria correspondiente a la variable y obtener los datos almacenados en esa ubicación.</p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/variable.png"></img>
              </div>
            </div>
          </div>
          <div className="accordion-item bg-transparent">
            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseTwo">
              <h2 data-aos="fade-right" className="text-light">Estilo de escritura</h2>
            </button>
            <div id="a2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-light">
                <p className="text-center mx-auto w-75">Un estilo de escritura en programación es una convención de codificación que se utiliza para dar formato y estructurar el código
                  fuente. Estas convenciones de estilo de codificación ayudan a que el código sea más legible y entendible para los programadores.</p>
                <p className="text-center mx-auto w-75">Las convenciones de estilo de codificación incluyen reglas para nombrar variables, funciones, clases, métodos, constantes, etc.
                  También pueden incluir reglas para la indentación, el espaciado, la longitud máxima de línea, entre otros aspectos.</p>
                <p className="text-center mx-auto w-75">En general, las convenciones de estilo de codificación se utilizan para estandarizar la forma en que se escribe el código dentro
                  de un proyecto o una organización, lo que facilita la colaboración y el mantenimiento del código a largo plazo. Además, siguiendo estas convenciones, el código puede
                  ser más fácilmente legible y comprensible por otros programadores, lo que es especialmente importante en proyectos de equipo.</p>
                <p className="text-center mx-auto w-75">En el caso de python, tenemos 3 tipos de estilos de escritura<br></br>
                  upper case: Se utiliza cuando nombramos una variable o función llamada con una palabra.<br></br>
                  snake case: Cuando nombramos una variable llamada con más de 1 palabra se utilizará "snake case".<br></br>
                  pascal case: Este estilo de escritura se utilizará solamente cuando creamos una clase.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/namingConventions.png"></img>
                <p className="text-center mx-auto w-75">También tenemos que saber que el lenguaje de python es camel sensitive, esto que quiere decir? Al ser camel sensitive python es sensible a las mayúsculas y minúsculas y es importante
                  evitar nombrar dos o más variables con el mismo nombre en un mismo ámbito en la programación, incluso si se utilizan diferentes tipos de escritura (como mayúsculas y minúsculas o
                  snake case vs. camel case), ya que esto puede llevar a confusiones y dificultades para identificar qué variable contiene qué valor.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/practice.png"></img>
                <p className="text-center mx-auto w-75">Nombrar variables con nombres distintos y descriptivos ayudará a mantener un código más organizado y fácil de leer y entender, lo que será beneficioso para la mantenibilidad y escalabilidad del código a largo plazo.
                </p>
                <p className="text-center mx-auto w-75">También en python existen palabras reservadas que debemos evitar al nombrar variables, ya que podrías tener problemas en el código.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/letterNot.png"></img>
              </div>
            </div>
          </div>
          <div className="accordion-item  bg-transparent">
            <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
              <h2 data-aos="fade-right" className="text-light">tipos de datos</h2>
            </button>
            <div id="a3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-light">
                <p className="text-center mx-auto w-75">Vamos a ver entonces cuáles son los tipos de datos que Python nos provee. </p>
                <p className="text-center mx-auto w-75">Por el momento vamos a hablar de 4 tipos de datos básicos que también
                  llamamos tipos primitivos (Int,Float,String, Boolean).</p>
                <h2 className="text-center mx-auto">Booleano</h2>
                <p className="text-center mx-auto w-75">Este es el primer tipo de dato que vamos a ver y se asemeja al lenguaje máquina, ya que su comportamiento es de forma binaria
                  como la máquina (0,1) pero tiene la particularidad de que no vamos a escribir 0 y 1,  sino que utilizaremos la palabra False para representar el 0 y True para representar el 1.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/boolean.png"></img>
                <h2 className="text-center mx-auto">Integer/float</h2>
                <p className="text-center mx-auto w-75">Cuando queramos representar números vamos a usar el tipo dato "int" o el tipo de dato "float".
                  El tipo de dato Int representará todos los números enteros, estos pueden ser tanto positivos como negativos;
                  El tipo de dato Float representará todos los números fraccionarios, estos pueden ser positivos, negativos y mostrados como decimales también.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/int.png"></img>
                <h2 className="text-center mx-auto">String</h2>
                <p className="text-center mx-auto w-75">String: Este tipo de datos representa letras o texto, hay que tener en cuenta que podemos tipear
                  también números pero estos no se comportarán como números y no podremos realizar operaciones matemáticas dentro de ella, para describir
                  que el tipo de dato es un string debemos poner el texto entre comillas o doble comillas(" ", "" "") si es que va a estar escrito en una
                  linea de código y triple comillas(""" """) en el caso de que queramos escribir en varias líneas de código".
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/str.png"></img>
                <h2 className="text-center mx-auto">type()</h2>
                <p className="text-center mx-auto w-75">A la hora de no saber qué tipo de dato contiene una variable podemos utilizar una función type,
                  para esto debemos escribir de la siguiente forma:  type(var), "var" va a representar el nombre de la variable que contenga el dato que queremos saber,
                  acá te mostraré un ejemplo de ello:
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/type.png"></img>
              </div>
            </div>
          </div>
          <div className="accordion-item bg-transparent">
            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseTwo">
              <h2 data-aos="fade-right" className="text-light">Operadores y expresiones</h2>
            </button>
            <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-light">
                <p className="text-center mx-auto w-75">En Python, los operadores son símbolos especiales que realizan operaciones en valores y variables.
                  Las expresiones, por otro lado, son combinaciones de valores, variables y operadores que Python puede evaluar y dar un resultado.
                </p>
                <p className="text-center mx-auto w-75">Existen varios tipos de operadores en Python, entre los más comunes se encuentran operadores:
                  aritméticos, de comparación, lógicos y de asignación.
                </p>
                <h2 className="text-center mx-auto">Operadores aritméticos</h2>
                <p className="text-center mx-auto w-75">Estos operadores se utilizan para realizar operaciones matemáticas básicas como la suma (+),
                  la resta (-), la multiplicación (*), la división (/), el módulo (%) y la potencia (**).
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/opArit.png"></img>
                <h2 className="text-center mx-auto">Operadores de comparación</h2>
                <p className="text-center mx-auto w-75">Se utilizan para comparar dos valores y devolver un valor booleano (verdadero o falso) como resultado. Algunos operadores de comparación comunes son el igual a (==), el distinto a (!=), mayor que (&gt;), menor que (&lt;), mayor o igual que (&gt;=) y menor o igual que (&lt;=).
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/opComp.png"></img>
                <h2 className="text-center mx-auto">Operadores lógicos</h2>
                <p className="text-center mx-auto w-75">Se utilizan para combinar valores booleanos y devolver un valor booleano como resultado. Los operadores lógicos más comunes son "and", "or" y "not".
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/opLog.png"></img>
              </div>
            </div>
          </div>
          <div className="accordion-item bg-transparent">
            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseTwo">
              <h2 data-aos="fade-right" className="text-light">Conversión común de tipos de datos </h2>
            </button>
            <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-light">
                <p className="text-center mx-auto w-75">La conversión de tipos de datos en Python se refiere al proceso de cambiar el tipo de un valor de una clase de datos a otra. En Python, esto se puede hacer mediante el uso de funciones incorporadas llamadas "funciones de conversión" que toman un valor y lo convierten en otro tipo de dato.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/convType.png"></img>
                <p className="text-center mx-auto w-75">También es importante tener en cuenta que algunas conversiones pueden no ser posibles o pueden producir resultados inesperados. Por ejemplo, la conversión de una cadena de texto que no representa un número válido a un número puede producir un error en tiempo de ejecución. Por lo tanto, es importante ser cuidadoso al realizar conversiones de tipo en Python y asegurarse de que los valores sean compatibles con el tipo de destino.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item bg-transparent text-center">
            <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseTwo">
              <h2 data-aos="fade-right" className="text-light">Conversión de tipos de datos - String</h2>
            </button>
            <div id="a6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-light">
                <h2 className="text-center mx-auto">F-string</h2>
                <p className="text-center mx-auto w-75">F-strings (cadenas formateadas) son una forma conveniente y legible de formatear y construir cadenas en Python a partir de expresiones y variables. Se introdujeron en Python 3.6 y son muy populares debido a su sintaxis sencilla y su capacidad para incorporar valores de manera directa en las cadenas.<br></br>Un f-string se crea precediendo una cadena con el prefijo f o F. Dentro de un f-string, puedes incluir expresiones Python encerradas entre llaves { }. Estas expresiones se evalúan y se insertan en la cadena final.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/f-string.png"></img>
                <h2 className="text-center mx-auto">Format</h2>
                <p className="text-center mx-auto w-75">El método format() se llama en una cadena y toma uno o más argumentos que se utilizan para completar marcadores de posición dentro de la cadena. Estos marcadores de posición se definen utilizando llaves {} en la cadena y se reemplazan por los valores correspondientes.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/format.png"></img>
                <h2 className="text-center mx-auto">Repr</h2>
                <p className="text-center mx-auto w-75">El método format() se llama en una cadena y toma uno o más argumentos que se utilizan para completar marcadores de posición dentro de la cadena. Estos marcadores de posición se definen utilizando llaves {} en la cadena y se reemplazan por los valores correspondientes.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/repr.png"></img>
              </div>
            </div>
          </div>
          <div className="accordion-item bg-transparent text-center">
            <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a7" aria-expanded="false" aria-controls="flush-collapseTwo">
              <h2 data-aos="fade-right" className="text-light">métodos de String</h2>
            </button>
            <div id="a7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-light">
                <h2 className="text-center mx-auto">Capitalize( )</h2>
                <p className="text-center mx-auto w-75"> El método capitalize() es utilizado en objetos de tipo str (cadenas) y se utiliza para devolver una copia de la cadena con el primer carácter en mayúscula y el resto en minúscula.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/capitalize.png"></img>
                <h2 className="text-center mx-auto">Lower( )</h2>
                <p className="text-center mx-auto w-75">El método lower() se utiliza en objetos de tipo str (cadenas) en Python y se utiliza para convertir una cadena a minúsculas.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/lower.png"></img>
                <h2 className="text-center mx-auto">Repr( )</h2>
                <p className="text-center mx-auto w-75">El método format() se llama en una cadena y toma uno o más argumentos que se utilizan para completar marcadores de posición dentro de la cadena. Estos marcadores de posición se definen utilizando llaves {} en la cadena y se reemplazan por los valores correspondientes.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/repr.png"></img>
                <h2 className="text-center mx-auto">Center( )</h2>
                <p className="text-center mx-auto w-75">El método center() se utiliza en objetos de tipo str (cadenas) en Python y se utiliza para centrar una cadena dentro de un ancho determinado.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/center.png"></img>
                <h2 className="text-center mx-auto">Count( )</h2>
                <p className="text-center mx-auto w-75">El método count() se utiliza en objetos de tipo str (cadenas) en Python y se utiliza para contar el número de apariciones de una subcadena dentro de una cadena.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/count.png"></img>
                <h2 className="text-center mx-auto">Endswith( )</h2>
                <p className="text-center mx-auto w-75">El método endswith() se utiliza en objetos de tipo str (cadenas) en Python y se utiliza para verificar si una cadena termina con una subcadena específica.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/endswith.png"></img>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}

export default Clase2