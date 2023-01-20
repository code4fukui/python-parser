import * as t from "https://deno.land/std/testing/asserts.ts";
import { pythonParser } from "./parser.js";

Deno.test("all", async () => {
  const testFile = await Deno.readTextFile("test.py");

  const ast = pythonParser.parse(testFile);
  
  const output = JSON.stringify(ast, null, 2);
  
  const expect = await Deno.readTextFile("test-output.json");
  t.assertEquals(output, expect);
});
