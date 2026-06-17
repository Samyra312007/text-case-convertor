const { convertCase, detectCase } = require('./src/index');

const tests = [
    { input: "hello world", fromCase: "lowercase"},
    { input: "helloWorld", fromCase: "camelCase"},
    { input: "HelloWorld", fromCase: "PascalCase"},
    { input: "hello_world", fromCase: "snake_case"},
    { input: "hello-world", fromCase: "kebab-case"},
    { input: "HELLO_WORLD", fromCase: "CONSTANT_CASE"},
    { input: "hello.world", fromCase: "dot.case"},
    { input: "HELLO WORLD", fromCase: "UPPERCASE"},
    { input: "Hello World", fromCase: "Capitalized"}
];

console.log("Testing Text Case Converter\n");


tests.forEach(({ input, fromCase }) => {
    console.log(`\n Input (${fromCase}): "${input}"`);

    const cases = ['camel', 'pascal', 'snake', 'kebab', 'constant', 'dot', 'upper', 'lower', 'capital'];

    cases.forEach(targetCase => {
        const result = convertCase(input, targetCase);
        console.log(` ${targetCase.padEnd(8)} -> "${result}"`);
    });

    //Test detection
    const detected = detectCase(input);
    console.log(`\n Detected case: ${detected}`);
});

console.log("✅All tests completed");

//Error handling test
console.log("\n ⚠️ Error handling test:");
try {
    convertCase("", "camel");
} catch (e) {
    console.log(` Caught error: ${e.message}`);
}