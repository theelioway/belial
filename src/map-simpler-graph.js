"use strict";
import {
  arrayAlways,
  objectAlways,
  objectPick,
  objectPrune,
  valueIsMeaningful,
} from "@elioway/abdiel";

/** Simplifies RDF schema :
 * 1. One word field names.
 * 2. Normalises inconsistencies in the data.
 * 3. Removes meaningless data.
 * 4. Removes unneeded properties. */
export const mapSimplerGraph = (DOMAIN) => {
  /* Replaces the schema domain name in properties and values. */
  const stringReplaceDomain = (prospect) => prospect.replace(DOMAIN, "");

  /* Replaces "rdfs" prefixes in properties and values. */
  const stringReplaceRDF = (prospect) =>
    prospect.replace("rdf:", "").replace("rdfs:", "");

  // Functions which return `para` (if non-object) or `para.<property>` ("@id"
  // & "@value") (if object). This is a way to handle inconsistent use of data
  // in the schema.
  const idAlways = objectAlways("@id");
  const valueAlways = objectAlways("@value");

  // Prune meaningless properties from an object.
  const meaningfulPrune = objectPrune(([_, value]) => valueIsMeaningful(value));

  // Pick only these properties.
  const tersePick = objectPick([
    "id",
    "type",
    "comment",
    "domainIncludes",
    "rangeIncludes",
    "subPropertyOf",
    "subClassOf",
  ]);

  return (entity) => {
    // Rename and Normalise these properties as lists.
    let listAnywayProps = ["domainIncludes", "rangeIncludes"];
    for (let p = 0; p < listAnywayProps.length; p++) {
      let simpleName = listAnywayProps[p];
      let domainedName = `${DOMAIN}${simpleName}`;
      // Assign the property as an array...
      entity[simpleName] = arrayAlways(entity[domainedName])
        .map(idAlways) // map values to non-objects.
        .filter(valueIsMeaningful) // filter out meaningless values.
        .map(stringReplaceDomain) // replace domain name.
        .map(stringReplaceRDF); // replace rdf.
    }

    // Simpler "label"=>"id" and "comment".
    entity["id"] = valueAlways(entity["rdfs:label"]);
    entity["comment"] = entity["rdfs:comment"];

    // Simpler "type": Assign the property as an array...
    entity["type"] = arrayAlways(entity["@type"])
      .map(idAlways) // pull the value out of the @id property if object.
      .map(stringReplaceDomain) // replace domain name.
      .map(stringReplaceRDF); // replace rdf.

    // Simpler "subPropertyOf": Assign the property as an array...
    entity["subPropertyOf"] = arrayAlways(entity["rdfs:subPropertyOf"])
      .map(idAlways) // pull the value out of the @id property if object.
      .filter(valueIsMeaningful) // filter out meaningless values.
      .map(stringReplaceDomain) // replace domain name.
      .map(stringReplaceRDF); // replace rdf.

    // Simpler "subClassOf": Assign the property as an array...
    entity["subClassOf"] = arrayAlways(entity["rdfs:subClassOf"])
      .map(idAlways) // pull the value out of the @id property if object.
      .filter(valueIsMeaningful) // filter out meaningless values.
      .map(stringReplaceDomain); // replace domain name.

    // Minify and return entity as a simpler version.
    return meaningfulPrune(tersePick(entity));
  };
};

export default mapSimplerGraph;
