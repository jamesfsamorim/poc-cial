export function eachCase<T>(
  description: string,
  cases: T[],
  testFn: (value: T) => void
) {
  cases.forEach((testCase) => {
    it(`${description} ${testCase}`, () => {
      testFn(testCase);
    });
  });
}
