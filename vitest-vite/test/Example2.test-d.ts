import { expectTypeOf, test } from 'vitest'

import sum from '@/sum'

test("Types in Sum function work properly", () => {
    expectTypeOf(sum).toBeFunction();

    expectTypeOf(sum).parameter(0).toMatchTypeOf<number>();
    expectTypeOf(sum).parameter(1).toMatchTypeOf<number>();

    expectTypeOf(sum).parameter(0).toBeNumber();
    expectTypeOf(sum).parameter(1).toBeNumber();

    expectTypeOf(sum).parameters.toEqualTypeOf<[number, number]>();
    expectTypeOf(sum).returns.toEqualTypeOf<number>();
})
