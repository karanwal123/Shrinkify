import { nanoid } from "nanoid";
//helper fxn
export const ID_generator_fxn = (length) => {
    //length is optional, default to 7 if not provided
    //badmai dekhte hain
    return nanoid(7);
};
