import { bucket } from "./firebaseAdmin.js";

async function test() {
  console.log("Bucket:", bucket.name);
}

test();