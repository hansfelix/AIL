import { cases } from "../../src/samples";

function getHost() {
  return process.env.SHIP_URL;
}

function getFullPath() {
  return `${getHost()}/ship/evaluate`;
}

describe("functional tests for evaluate", () => {
  test.each(cases)("$name -> $output", async ({ input, output }) => {
    const path = getFullPath();
    console.log(getFullPath());
    const response = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });

    expect(await response.text()).toStrictEqual(String(output));
  });
});
