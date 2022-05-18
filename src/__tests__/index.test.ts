describe('some description about tested function', () => {
  test('test one', () => {
    expect(5).toBe(5);
  });
  test('test two', () => {
    expect([0, 1, 2]).toEqual([0, 1, 2]);
  });
  test('test three', () => {
    expect(null).toBeFalsy();
  });
});
