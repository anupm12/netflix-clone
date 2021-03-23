import { createContext } from "react";
import Firebase from "firebase/app";

export const FirebaseContext = createContext({} as IFirebaseContext);

interface IFirebaseContext {
  firebase: Firebase.app.App;
}
