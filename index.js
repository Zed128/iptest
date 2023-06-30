const fetch = require("node-fetch");

async function main() {
  const response = await fetch('https://reqtest.zed256.repl.co');
  const body = await response.text();

  console.log(body)
  setTimeout(main, 1600);
}

main()
