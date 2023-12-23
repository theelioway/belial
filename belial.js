/**
 * 
 * @usage 
 * 
import belial from "@elioway/belial/promised";

belial().then((module) => {
  // Now you can access the functions and exports from "./src/index.js"
  // For example:
  module.stringCaseKebab("AbdielAsPromised");
}).catch((error) => {
  console.error("Error loading module:", error);
});
 */

export const belial = async () => await import("./src/index.js");

export default belial;
