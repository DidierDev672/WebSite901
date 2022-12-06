import { db } from "./firebase";
import { collection, addDoc, query, where, getDocs, setDoc, doc } from "firebase/firestore";

const contactRef = "contact";
const profileRef = "profile";
const pqrsRef = "pqrs";
const productsRef = "products";
const headerBuyRef = "headerBuy";
const detailBuyRef = "detailBuy";

export default {
    async saveContact({id,namefull, email, phone, matter, message}){
        const docRef = await addDoc(collection(db, contactRef), {
            id,
            namefull,
            email,
            phone,
            matter,
            message
        });

        return docRef;
    },

    async saveProfile({uid, namefull, phone, country, city, address, email, password}){
        const docRef = await addDoc(collection(db, profileRef), {
            uid,
            namefull,
            phone,
            country,
            city,
            address,
            email,
            password
        });

        return docRef;
    },

    async savePqrs({namefull, phone, email, petition, description}){
        const docRef = await addDoc(collection(db, pqrsRef), {
            namefull,
            phone,
            email,
            petition,
            description
        });

        return docRef;
    },

    async updateProfile({id, uid, namefull, phone, country, city, address, email, password}){
        const ProfileRef = doc(db, profileRef, id);
        await setDoc(ProfileRef, {
            uid,
            namefull,
            phone,
            country,
            city,
            address,
            email,
            password
        });

    },

    async queryProfile({uid}){
        const enquiry = [];
        const q = query(collection(db, profileRef), where ("uid", "==", uid));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            enquiry.push({
                id: doc.id, uid: doc.data().uid,
                namefull: doc.data().namefull,
                phone: doc.data().phone,
                country: doc.data().country,
                city: doc.data().city,
                address: doc.data().address,
                email: doc.data().email,
                password: doc.data().password
            });
        });
        return { enquiry };
    },

    async queryAllProducts(){
        const products = [];
        const querySnapshot = await getDocs(collection(db, productsRef));
        querySnapshot.forEach((doc) => {
            products.push({
                idDocument: doc.id,
                id: doc.data().id,
                category: doc.data().category,
                name_product: doc.data().name_product,
                coverURL: doc.data().coverURL,
                price: doc.data().price,
                description: doc.data().description
            });
        });

        return products;
    },

    async headerBuy({ code_buy, date_buy, namefull, phone, address, section, email, status_buy, status_trip }){
        const docRef = await addDoc(collection(db, headerBuyRef),{
            code_buy,
            date_buy,
            namefull,
            phone,
            address,
            section,
            email,
            status_buy,
            status_trip
        });

        return docRef;
    },

    async detailBuy ({code_buy, product}){
        const docRef = await addDoc(collection(db, detailBuyRef),{
            code_buy,
            product
        });

        return docRef;
    }
};