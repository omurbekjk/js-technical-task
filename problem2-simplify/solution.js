function func(s, a, b) {
    var match_empty = /^$/;
    if (s.match(match_empty)) {
        return -1;
    } else {
        var i = s.length - 1;
        var aIndex = -1;
        var bIndex = -1;

        while ((aIndex == -1) && (bIndex == -1) && (i >= 0)) {
            if (s.substring(i, i + 1) == a)
                aIndex = i;
            if (s.substring(i, i + 1) == b)
                bIndex = i;

            i--;
        }

        if (aIndex != -1) {
            if (bIndex == -1)
                return aIndex;
            else
                return Math.max(aIndex, bIndex);
        } else {
            if (bIndex != -1)
                return bIndex;
            else
                return -1;
        }
    }
}

/**
 * @param s
 * @param letterA
 * @param letterB
 * @returns {number}
 */
function simplified(s, letterA, letterB) {
    if (s.length === 0) return -1;
    let posA = s.lastIndexOf(letterA);
    let posB = s.lastIndexOf(letterB);
    // Note: special case when length of letterA/letterB is longer than 1
    if (letterA.length > 1) posA = -1;
    if (letterB.length > 1) posB = -1;
    return Math.max(posA, posB);
}

/**
 * Test runner to check correctness of simplified function
 */
function testRunner() {
    let testCases = [
        {
            s: "hello",
            letterA: "a",
            letterB: "b",
        },
        {
            s: "hello world",
            letterA: "o",
            letterB: "o",
        },
        {
            s: "hello world",
            letterA: "w",
            letterB: "o",
        },
        {
            s: "hello world",
            letterA: "o",
            letterB: "w",
        },
        {
            s: "hello world",
            letterA: "long letter",
            letterB: "short letter",
        },
    ];

    for (let i = 0; i < testCases.length; i++) {
        let expectedResult = func(testCases[i].s, testCases[i].letterA, testCases[i].letterB);
        let actualResult = simplified(testCases[i].s, testCases[i].letterA, testCases[i].letterB);
        if (expectedResult !== actualResult) {
            console.log(`Test case ${i + 1} FAILED. Expected to match ${expectedResult}==${actualResult}`);
        }
        console.log(`Test case ${i + 1} passed.`);
    }
    console.log(`All tests are passed.`);
}

testRunner();
