import { expect, test } from 'vitest'

import sum from '@/sum'

test("Sum", () => {
    expect(sum(1, 3)).toBe(4);
})
