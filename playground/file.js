import { readGraphFileRelatively } from "../utils/index.js";
import { mapSimplerGraph } from "../src/index.js";

const grapher = async () => {
  let GRAPH = await readGraphFileRelatively(
    import.meta.url,
    "../schemaorg/data/releases/9.0/schemaorg-all-http.jsonld",
  );
  GRAPH = GRAPH.map(mapSimplerGraph("http://schema.org/"));
  console.log(GRAPH);
};

grapher();
