import "firebase/database";
import { rxDatabase } from "./init.firebase";
export function getFirebase(path = "/") {
  return rxDatabase()
    .ref(path)
    .once("value");
}
