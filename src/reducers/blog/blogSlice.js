import { createSlice } from "@reduxjs/toolkit";

const writeBlog = new URL("../../assets/Young man writing in a notebook Illustration in PNG, SVG_files/6ea7357a-fe6e-47ac-a6a8-6e7d38a8fa38.png", import.meta.url).href;
const skillsBlog = new URL("../../assets/Young people discussing work issues Illustration in PNG, SVG_files/ouch-cover.jpg",import.meta.url).href;
const coverAuthorOne = new URL("../../assets/3D young woman sitting in front of laptop and writing notes Illustration in PNG, SVG_files/041c6624-a9f5-491c-a550-51642c600cb9.png", import.meta.url).href;

const initialState = {
    authors:[{
        id: 1,
        name_author: 'Didier Arias',
        coverAuthor: coverAuthorOne,
        section: ['Technology', 'Science & Innovation', 'Others'],
        twitter: 'https://twitter.com/Aizen0073',
        facebook: 'https://www.facebook.com/Aizen.Arias.007',
        instagram: 'https://www.instagram.com/aizenarias/',
        },],
    blogHeader: [ {
            idPost: "pot-1",
            idAuthor: 1,
            titlePost: "¿Qué es una estructura narrativa?",
            description: "Desde el punto de vista técnico, una estructura narrativa es el esqueleto de nuestra historia. Nos dice que elemento usar, cuando y donde para poder generar la mayor empatía posible en las personas que escuchen, lean o vean nuestra historia.",
            category: "Others",
            date_public: "06/12/2022",
            cover: writeBlog
        },
        {
            idPost: "post-2",
            idAuthor: 1,
            titlePost: "Habilidades necesarias para desarrolladores",
            description: "Las empresas quieren crear productos innovadores que impacten positivamente en las vidas de la sociedad. Por esta razón, están en la búsqueda de investigadores  para probar sus creaciones en el mundo real antes de lanzarlas al público.",
            category: "Others",
            date_public: "06/12/2022",
            cover: skillsBlog
        }],
    blogDetalle:[ {
            idPost: 'post-1',

            idAuthor: 1,
            titleOne: '¿Qué es una estructura narrativa?',
            paragraphOne: [
            'Desde el punto de vista técnico, una estructura narrativa es el esqueleto de nuestra historia. Nos dice que elemento usar, cuando y donde para poder generar la mayor empatía posible en las personas que escuchen, lean o vean nuestra historia.',
            'Lo anterior se debe a que si nuestros espectadores sienten empatía hacia que se les cuenta, entonces sus reacciones serán genuinas y el mensajes que queramos transmitir quedará claro.',
            ],
            titleTwo: 'Como funciona las estructuras narrativas',
            paragraphTwo: [
            'Es verdad que el seguir una estructura narrativa tendemos a vernos encasillados en contar las cosas de forma aparentemente específica y es posible que esto haga que nuestra historia resulte similar a otra, este es el motivo por el cual muchos escritores se encuentran en contar de estos métodos.',
            'Para empezar, las estructuras narrativas fueron diseñadas por expertos en la industria, cada pieza que las estructuras la sugieren a tus historia tiene un motivo y es algo que ha sido probado miles de veces con resultados positivos. A su vez, ayuda a brindarle coherencia a tu historia, conectar ideas y generar un cambio en tu protagonista.',
            'Inclusive, ayudan a acabar con el famoso y temido bloqueo del escritor porque le brindan claridad a tu trama y al recorrido que tus personajes deben hacer.',
            ],
            titleThree: 'Cómo lograr una estructura narrativa',
            paragraphThree: [
            'Un ejemplo de lo que proponen las estructuras narrativas es que cada historia debe basarse en un planteamiento, una confrontación y una resolución. Esto parece algo básico, y lo es ya que inclusive esos son los fundamentos de la estructura de los 3 actos que ha sido usada desde los tiempos de Aristoteles hasta hoy en día ha sido utilizada en todos tipos de narrativa, incluido el teatro.',
            'A Pesar de los básicos que sean y sus antecedentes, en sorprendente el número de historias que se olvidan de alguno de estos factores esenciales que sirven como base.Y las repercusiones de estos son evidentes!',
            ],
            titleFour: 'Tipos de estructuras que existen',
            paragraphFour: [
            'Hay varias estructuras que se encargan de enfatizar cada uno de estos elementos, presentando una serie de pasos intermedios para detallar estos tres momentos básicos y proponiendo un orden en el que estos pasos deben suceder. Algunos ejemplos de esto son:',
            ],
            listOne:'El camino del Héroe',
            listTwo: 'Save the cat',
            listThree: 'La estructura de los 7 pilares.',
            subParagraohFour:
            'Esos momentos progresivos e indispensables que estas estructuras proponen y que deben suceder son conocidos como “beats” y son justamente los que tienen una connotación mayor a una escena y hacen que la historia avance. El mejor modo para saber si un beat funciona o no es eliminándolo. Si el beat funciona, la historia no debería funcionar sin él.',
            titleFive: 'Cuenta una buena historia',
            paragrapFive: [
            'Las historias no se basan solo en su trama. Una buena historia debe tener personajes claros, empáticos y que generen una reacción en los espectadores o de lo contrario el camino que recorran no nos será atractivo.',
            'Se necesita que tu audiencia quiera que tu protagonista logre su meta y presente un cambio. Es por eso que las estructuras proponen a un tipo de protagonista que es el que se lleva usando desde que tenemos memoria.',
            'Un ejemplo de esto se encuentra en el tipo de estructura llamado Save the cat. Ese método fue creado por Blake Snyder debido a que él se dio cuenta de que las películas no se tratan solo de una historia, sino de la forma en la que el público reacciona antes ellas.',
            'Según se estudió sobre esto, lo que propone en cuanto a protagonistas es que este debe ser ya sea mejor, el bueno, el gracioso, el que sufre   o  el que está en desventaja. Si tu protagonista cumple con mínimo una de estas características, las posibilidades de que tu audiencia lo apoye y quiera conocerle aumentan considerablemente.',
            'Como conclusión, si es una realidad que una historia te propone el recorrido que un protagonista debe hacer y esto puede parecer limitante, pero la realidad es que es lo opuesto. Las estructuras están para ayudarnos y hacer que nuestras historias se vuelvan más claras y nuestros personajes más empáticos.',
            'Hay que tomar en cuenta que si se desea producir algo comercial, lo más probable es que para poder vender una historia sea un requisito el seguir alguna de estas estructuras. Esto no significa que nuestra habilidad creativa se pierda o que nuestra historia deba volverse necesariamente predecible.',
            'Cuando uno entiende la esencia de las estructuras es completamente posible y recomendado el darles nuestra propia voz, estilo y asegurarnos de que sean utilizadas para contar lo que realmente queremos contar.',
            'Necesitamos verlas más como un esqueleto que como un mapa. No son algo que debamos simplemente seguir paso a paso sin comprenderlas, son los que hace que nuestra historia funcione y se mueve, pero jamás tiene la intención de hacer que pierda su ausencia.',
            ],
            subParagraohFive: [
            'Como conclusión, aunque las estructuras son las bases de nuestra historia y las debemos utilizar para brindarles. coherencia, no podemos permitir que por seguirles la ausencia de lo queremos contar desaparezca, por eso es que es necesario ciçonocerlas mucho más allá de la superficie, tenemos que entender por qué cada existe cada beat y cual es su finalidad, solo así podremos adaptarlos a lo que realmente queremos contar.',
            ],
        }]
};

export const blogSlice = createSlice({
    name: "blog",
    initialState: initialState
});

export default blogSlice.reducer;