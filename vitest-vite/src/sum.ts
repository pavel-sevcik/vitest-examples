export default function sum(a: number, b: number) {
    return a + b;
}

if (import.meta.vitest) {
    const { test, expect } = import.meta.vitest

    test("Sum", () => {
        expect(sum(1, 3)).toBe(4);
    });
}
