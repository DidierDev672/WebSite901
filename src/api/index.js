import { db } from "./firebase";
import { collection, addDoc, query, where, getDocs, setDoc, doc } from "firebase/firestore";
import { updateDoc } from "firebase/firestore";

const contactRef = "contact";
const profileRef = "profile";
const pqrsRef = "pqrs";
const productsRef = "products";
const headerBuyRef = "headerBuy";
const detailBuyRef = "detailBuy";

export default {
    async saveContact({id,namefull, email, phone, matter, message, uid}){
        const docRef = await addDoc(collection(db, contactRef), {
            id,
            namefull,
            email,
            phone,
            matter,
            message,
            uid
        });

        return docRef;
    },

    async saveProfile({uid, namefull, phone, country, city, section,address, email, password}){
        const docRef = await addDoc(collection(db, profileRef), {
            uid,
            namefull,
            phone,
            country,
            city,
            section,
            address,
            email,
            password
        });

        return docRef;
    },

    async RegisterUser({uid, namefull, phone, email, password}){
        const docRef = await addDoc(collection(db, profileRef),{
            namefull,
            phone,
            email,
            password,
            uid
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

    async updateProfile({id, uid, namefull, phone, country, city, section,address, email, password}){
        const ProfileRef = doc(db, profileRef, id);
        await setDoc(ProfileRef, {
            uid,
            namefull,
            phone,
            country,
            city,
            section,
            address,
            email,
            password
        });

    },

    async queryProfile({uid}){
        let enquiry = {};
        const q = query(collection(db, profileRef), where ("uid", "==", uid));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            enquiry = {
                id: doc.id, uid: doc.data().uid,
                namefull: doc.data().namefull,
                phone: doc.data().phone,
                country: doc.data().country,
                section: doc.data().section,
                city: doc.data().city,
                address: doc.data().address,
                email: doc.data().email,
                password: doc.data().password
            };
        });

        return enquiry;
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
                price: doc.data().price,
                description: doc.data().description
            });
        });

        return products;
    },

    async queryAskContact({ uid }){
        let data = [];
        const q = query(collection(db, contactRef), where ("uid", "==", uid));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            data.push({
                id: doc.id,
                email: doc.data().eamil,
                namefull: doc.data().namefull,
                phone: doc.data().phone,
                email: doc.data().email,
                matter: doc.data().matter,
                uid: doc.data().uid
            });
        });

        return data;
    },

    async headerBuy({ code_buy, date_buy, namefull, phone, address, email, status_buy, status_trip,status_payment ,uid }){
        var idDocument;
        const docRef = await addDoc(collection(db, headerBuyRef),{
            code_buy,
            date_buy,
            namefull,
            phone,
            address,
            email,
            uid,
            status_buy,
            status_trip,
            status_payment,
        });
        idDocument = docRef.id;
        return idDocument;
    },

    async detailBuy ({code_buy,uid ,product}){
        const docRef = await addDoc(collection(db, detailBuyRef),{
            code_buy,
            uid,
            product
        });

        return docRef;
    },

    async updateHeaderBuy({ idDocument }){
        // Create an initial document to update
        const ordersDocRef = doc(db, headerBuyRef, idDocument);

        // To update
        await updateDoc(ordersDocRef, {
            "status_payment": true
        });
    },

    async queryOrders ({ uid }){
        let data = [];
        const q = query(collection(db, headerBuyRef), where ( "uid", "==", uid));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            data.push({
                id: doc.id,
                uid: doc.data().uid,
                code_buy: doc.data().code_buy,
                namefull: doc.data().namefull,
                status_buy: doc.data().status_buy,
                status_trip: doc.data().status_trip
            });
        });

        return data;
    },

    async queryDetailOrders({ uid }){
        let data = [];
        let product = [];
        const q = query(collection(db, detailBuyRef), where ("uid", "==", uid));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            data.push({
                id: doc.id,
                code_buy: doc.data().code_buy,
            });

            product.push({ id: doc.id, code_buy: doc.data().code_buy, uid: doc.data().uid, ...doc.data().product});
        });

        return { data, product };
    }
};