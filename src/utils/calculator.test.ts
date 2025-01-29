import { minus, plus } from "./calculator";

describe('calculator 테스트', () => {
    test("두 수를 더하면 두 수의 합이 나와야함", () => {
        expect(plus(1, 2)).toBe(3);
    });
    
    test("두 수를 빼면 두 수의 차가 나와야함", () => {
        expect(minus(3, 1)).toBe(2);
    });
})