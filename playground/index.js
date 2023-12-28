// import { objectSortProperties } from "@elioway/abdiel"
import { readGraphFileRelatively } from "../utils/index.js";
import {
  filterChildClassesOf,
  filterPropertiesOf,
  findOf,
  mapSimplerGraph,
  reduceAncestorClassesOf,
  reduceDescendantClassesOf,
} from "../src/index.js";

const mapIds = ({ id }) => id;

const graph = readGraphFileRelatively(
  import.meta.url,
  "../schemaorg/data/releases/9.0/schemaorg-all-http.jsonld",
).map(mapSimplerGraph("http://schema.org/"));

const id = "RsvpAction";

let entity = graph.find(findOf({ id }));

const ancestors = graph
  .reduce(reduceAncestorClassesOf(entity), [])
  .map(mapIds)
  .sort();

const descendants = graph
  .reduce(reduceDescendantClassesOf(entity), [])
  .map(mapIds)
  .sort();

const children = graph.filter(filterChildClassesOf(entity)).map(mapIds).sort();

const properties = graph.filter(filterPropertiesOf(entity)).map(mapIds).sort();

const belial = {
  ...entity,
  ancestors,
  descendants,
  children,
  properties,
};
