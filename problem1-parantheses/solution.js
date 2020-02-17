class Parentheses {
    constructor(text, isValid) {
        this.text = text;
        this.isValid = isValid;
    }
}

/**
 * @param text
 * @returns {number}
 */
function verify(text) {
    let openParentheses = "([<";
    let closeParentheses = ")]>";
    let stack = [];
    for (let i = 0; i < text.length; i++) {
        if (openParentheses.includes(text[i])) {
            stack.push(text[i]);
        } else if (closeParentheses.includes(text[i])) {
            // Note: special case when closing parenthesis comes first
            if (stack.length === 0) return 0;
            // If we face closing parentheses we check last value of stack and compare them
            // if they are equal we pop value from stack, else invalid parentheses
            let lastValue = stack[stack.length - 1];
            if ((lastValue === '(' && text[i] !== ')') ||
                (lastValue === '[' && text[i] !== ']') ||
                (lastValue === '<' && text[i] !== '>')) {
                return 0;
            }
            // Parentheses match, pop it from stack
            stack.pop()
        }
    }
    // Note: special case when open parentheses are not closed
    if (stack.length !== 0) {
        return 0
    }
    return 1;
}

/**
 * Parenthesis validation checker with tests
 */
function Run() {
    console.log("Running tests cases");
    let testCases = [
        // Given test cases
        new Parentheses("---(++++)----", 1),
        new Parentheses("", 1),
        new Parentheses("before ( middle []) after ", 1),
        new Parentheses(") (", 0),
        new Parentheses("<(   >)", 0),
        new Parentheses("(  [  <>  ()  ]  <>  )", 1),
        new Parentheses("   (      [)", 0),

        // Extra corner cases
        new Parentheses("()", 1),
        new Parentheses("(()", 0),
        new Parentheses("())", 0),
    ];

    for (let i = 0; i < testCases.length; i++) {
        isValid = verify(testCases[i].text);
        if (isValid !== testCases[i].isValid) {
            console.log(`Test case ${i + 1} FAILED. Expected: ${testCases[i].isValid}, actual: ${isValid}`);
            return
        }

        console.log(`Test case ${i + 1} passed`);
    }
    console.log("All tests cases passed!!!");
}

Run();
