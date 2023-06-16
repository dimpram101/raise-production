import { makeDiskStorage, makeStorage } from "../config/multer.js";

const storage = makeDiskStorage('./public/payment');
const paymentStorage = makeStorage(storage);

export default paymentStorage;