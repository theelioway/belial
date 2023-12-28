# belial Developers

```javascript
import {
  fsImportMetaUrlPath,
  fsReadJson,
  objectArraySortByProperty,
} from "@elioway/abdiel";
import {
  filterChildClassesOf,
  filterPropertiesOf,
  findOf,
  mapSimplerGraph,
  reduceAncestorClassesOf,
  reduceDescendantClassesOf,
} from "@elioway/belial";

export const getGraph = async () => {
  let schemaPath = fsImportMetaUrlPath(
    import.meta.url,
    "../schemaorg/data/releases/9.0/schemaorg-all-http.jsonld",
  );
  const GRAPH = await fsReadJson(schemaPath);
  return (
    GRAPH["@GRAPH"]
      // Normalise for elioWay use.
      .map(mapSimplerGraph("http://schema.org/"))
      // Sort all the entities so that output propeties of objects are also;
      .sort(objectArraySortByProperty("id"))
  );
};

const mapIds = ({ id }) => id;

const GRAPH = getGraph();

const id = "RsvpAction";

let entity = GRAPH.find(findOf({ id }));

const ancestors = GRAPH.reduce(reduceAncestorClassesOf(entity), [])
  .map(mapIds)
  .sort();

const descendants = GRAPH.reduce(reduceDescendantClassesOf(entity), [])
  .map(mapIds)
  .sort();

const children = GRAPH.filter(filterChildClassesOf(entity)).map(mapIds).sort();

const properties = GRAPH.filter(filterPropertiesOf(entity)).map(mapIds).sort();

const belial = {
  ...entity,
  ancestors,
  descendants,
  children,
  properties,
};

console.assert({ [id]: belial } === {});
```
