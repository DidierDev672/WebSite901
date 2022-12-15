import { createSlice } from "@reduxjs/toolkit";

const writeBlog = new URL("../../assets/Young man writing in a notebook Illustration in PNG, SVG_files/6ea7357a-fe6e-47ac-a6a8-6e7d38a8fa38.png", import.meta.url).href;
const skillsBlog = new URL("../../assets/Young people discussing work issues Illustration in PNG, SVG_files/ouch-cover.jpg",import.meta.url).href;
const coverAuthorOne = new URL("../../assets/3D young woman sitting in front of laptop and writing notes Illustration in PNG, SVG_files/041c6624-a9f5-491c-a550-51642c600cb9.png", import.meta.url).href;

const PostWrite = new URL("../../post/Write.md", import.meta.url).href;

const initialState = {
    blogHeader: [ {
            idPost: "post-1",
            idAuthor: 1,
            titlePost: "¿Qué es una estructura narrativa?",
            description: "Desde el punto de vista técnico, una estructura narrativa es el esqueleto de nuestra historia. Nos dice que elemento usar, cuando y donde para poder generar la mayor empatía posible en las personas que escuchen, lean o vean nuestra historia.",
            category: "Others",
            date_public: "06/12/2022",
            cover: writeBlog,
            name_author: 'Didier Arias',
            coverAuthor: coverAuthorOne,
            // section: ['Technology', 'Science & Innovation', 'Others'],
            twitter: 'https://twitter.com/Aizen0073',
            facebook: 'https://www.facebook.com/Aizen.Arias.007',
            instagram: 'https://www.instagram.com/aizenarias/',
        },
        {
            idPost: "post-2",
            idAuthor: 1,
            titlePost: "Habilidades necesarias para desarrolladores",
            description: "Las empresas quieren crear productos innovadores que impacten positivamente en las vidas de la sociedad. Por esta razón, están en la búsqueda de investigadores  para probar sus creaciones en el mundo real antes de lanzarlas al público.",
            category: "Others",
            date_public: "06/12/2022",
            cover: skillsBlog
        },
        {
            idPost: "post-3",
            idAuthor: 1,
            titlePost:"Crean un perro inteligente que ayuda a las personas con discapacidad",
            description: " Científicos del consejo superior de investigaciones científicos (españas) han creado a tefi, un prototipo robótico con forma de perro para asistir a personas ciegas, mayores con demencia u otras que lo necesiten. Mediante inteligencia artificial, distingue entre objetos y humanos que observa con la cámara de su cabeza y, al estar conectado a Google Maps, localiza lugares y comunica a su dueño la situación del tráfico.",
            category: "Science And Innovation",
            date_public: "07/12/2022"
        }],
    blogDetalle:[ {
            idPost: 'post-1',
            idAuthor: 1,
            Post: PostWrite,
        }]
};

export const blogSlice = createSlice({
    name: "blog",
    initialState: initialState
});

export default blogSlice.reducer;