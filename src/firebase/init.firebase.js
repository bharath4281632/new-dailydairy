import firebase from "firebase/app";
import config from "../config";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

const { firebaseConfig } = config;
export function rxDatabase() {
  return !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig).database()
    : firebase.app().database();
}
export function rxauth() {
  return !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig).auth()
    : firebase.app().auth();
}
export function rxStorage() {
  return !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig).storage()
    : firebase.app().storage();
}
