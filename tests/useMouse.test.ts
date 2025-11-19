import { describe, it, expect } from 'vitest'
import { useMouse } from '../src/useMouse'

describe('useMouse', () => {
  it('should provide coordinates', () => {
    const { x, y } = useMouse()
    expect(x.value).toBe(0)
    expect(y.value).toBe(0)
  })
})