import "firebase/database";
import { rxDatabase } from "./init";
export function getFirebase(path = "/") {
  return rxDatabase()
    .ref(path)
    .once("value");
}
