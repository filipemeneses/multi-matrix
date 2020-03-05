const { matrix } = require('.');

describe('matrix', () => {
  describe('matrix', () => {
    test('should be a function', () => {
      expect(matrix).toBeTruthy();
      expect(typeof matrix).toEqual('function');
    });
    test('should return an object with functions', () => {
      expect(typeof matrix(1)).toEqual('object');
      expect(matrix(1).map).toBeTruthy();
      expect(matrix(1).forEach).toBeTruthy();
    });
  });

  describe('matrix(n).map', () => {
    test('should be a function', () => {
      expect(matrix(2, 2)).toBeTruthy();
      expect(typeof matrix(2, 2).map).toEqual('function');
    });
    test('should return a mapped 2 dimensional array given 2 arguments', () => {
      expect(matrix(2, 2).map(([x, y]) => `args: x: ${x} y: ${y}`)).toEqual(
        [
          ['args: x: 0 y: 0', 'args: x: 0 y: 1'],
          ['args: x: 1 y: 0', 'args: x: 1 y: 1'],
        ],
      );
      expect(matrix(3, 3).map(([x, y]) => `args: x: ${x} y: ${y}`)).toEqual(
        [
          ['args: x: 0 y: 0', 'args: x: 0 y: 1', 'args: x: 0 y: 2'],
          ['args: x: 1 y: 0', 'args: x: 1 y: 1', 'args: x: 1 y: 2'],
          ['args: x: 2 y: 0', 'args: x: 2 y: 1', 'args: x: 2 y: 2'],
        ],
      );
    });
    test('should return a mapped 3 dimensional array 3 arguments', () => {
      expect(matrix(2, 2, 2).map(([x, y, z]) => `args: x: ${x} y: ${y} z: ${z}`)).toEqual(
        [
          [
            ['args: x: 0 y: 0 z: 0', 'args: x: 0 y: 0 z: 1'],
            ['args: x: 0 y: 1 z: 0', 'args: x: 0 y: 1 z: 1'],
          ],
          [
            ['args: x: 1 y: 0 z: 0', 'args: x: 1 y: 0 z: 1'],
            ['args: x: 1 y: 1 z: 0', 'args: x: 1 y: 1 z: 1'],
          ],
        ],
      );
      expect(matrix(3, 3, 3).map(([x, y, z]) => `args: x: ${x} y: ${y} z: ${z}`)).toEqual(
        [
          [
            [
              'args: x: 0 y: 0 z: 0',
              'args: x: 0 y: 0 z: 1',
              'args: x: 0 y: 0 z: 2',
            ],
            [
              'args: x: 0 y: 1 z: 0',
              'args: x: 0 y: 1 z: 1',
              'args: x: 0 y: 1 z: 2',
            ],
            [
              'args: x: 0 y: 2 z: 0',
              'args: x: 0 y: 2 z: 1',
              'args: x: 0 y: 2 z: 2',
            ],
          ],
          [
            [
              'args: x: 1 y: 0 z: 0',
              'args: x: 1 y: 0 z: 1',
              'args: x: 1 y: 0 z: 2',
            ],
            [
              'args: x: 1 y: 1 z: 0',
              'args: x: 1 y: 1 z: 1',
              'args: x: 1 y: 1 z: 2',
            ],
            [
              'args: x: 1 y: 2 z: 0',
              'args: x: 1 y: 2 z: 1',
              'args: x: 1 y: 2 z: 2',
            ],
          ],
          [
            [
              'args: x: 2 y: 0 z: 0',
              'args: x: 2 y: 0 z: 1',
              'args: x: 2 y: 0 z: 2',
            ],
            [
              'args: x: 2 y: 1 z: 0',
              'args: x: 2 y: 1 z: 1',
              'args: x: 2 y: 1 z: 2',
            ],
            [
              'args: x: 2 y: 2 z: 0',
              'args: x: 2 y: 2 z: 1',
              'args: x: 2 y: 2 z: 2',
            ],
          ],
        ],
      );
    });
    test('should return a mapped N dimensional array given N arguments', () => {
      expect(matrix(2, 2, 2, 2, 2).map(([...args]) => `args: ${args}`)).toEqual(
        [
          [
            [
              [
                ['args: 0,0,0,0,0', 'args: 0,0,0,0,1'],
                ['args: 0,0,0,1,0', 'args: 0,0,0,1,1'],
              ],
              [
                ['args: 0,0,1,0,0', 'args: 0,0,1,0,1'],
                ['args: 0,0,1,1,0', 'args: 0,0,1,1,1'],
              ],
            ],
            [
              [
                ['args: 0,1,0,0,0', 'args: 0,1,0,0,1'],
                ['args: 0,1,0,1,0', 'args: 0,1,0,1,1'],
              ],
              [
                ['args: 0,1,1,0,0', 'args: 0,1,1,0,1'],
                ['args: 0,1,1,1,0', 'args: 0,1,1,1,1'],
              ],
            ],
          ],
          [
            [
              [
                ['args: 1,0,0,0,0', 'args: 1,0,0,0,1'],
                ['args: 1,0,0,1,0', 'args: 1,0,0,1,1'],
              ],
              [
                ['args: 1,0,1,0,0', 'args: 1,0,1,0,1'],
                ['args: 1,0,1,1,0', 'args: 1,0,1,1,1'],
              ],
            ],
            [
              [
                ['args: 1,1,0,0,0', 'args: 1,1,0,0,1'],
                ['args: 1,1,0,1,0', 'args: 1,1,0,1,1'],
              ],
              [
                ['args: 1,1,1,0,0', 'args: 1,1,1,0,1'],
                ['args: 1,1,1,1,0', 'args: 1,1,1,1,1'],
              ],
            ],
          ],
        ],
      );
    });
  });

  describe('matrix(n).forEach', () => {
    test('should be a function', () => {
      expect(matrix(2, 2).forEach).toBeTruthy();
      expect(typeof matrix(2, 2).forEach).toEqual('function');
    });
    test('should loop through a 2 dimensional array', () => {
      const callback = jest.fn();

      matrix(2, 2).forEach(callback);

      expect(callback).toHaveBeenCalledTimes(4);
      expect(callback).toBeCalledWith([0, 0]);
      expect(callback).toBeCalledWith([0, 1]);
      expect(callback).toBeCalledWith([1, 0]);
      expect(callback).toBeCalledWith([1, 1]);
    });
    test('should loop through a 3 dimensional array', () => {
      const callback = jest.fn();

      matrix(2, 2, 2).forEach(callback);

      expect(callback).toHaveBeenCalledTimes(8);
      expect(callback).toBeCalledWith([0, 0, 0]);
      expect(callback).toBeCalledWith([0, 0, 1]);
      expect(callback).toBeCalledWith([0, 1, 0]);
      expect(callback).toBeCalledWith([0, 1, 1]);
      expect(callback).toBeCalledWith([1, 0, 0]);
      expect(callback).toBeCalledWith([1, 0, 1]);
      expect(callback).toBeCalledWith([1, 1, 0]);
      expect(callback).toBeCalledWith([1, 1, 1]);
    });
    test('should loop through a N dimensional array', () => {
      const callback = jest.fn();

      matrix(2, 2, 2, 2).forEach(callback);

      expect(callback).toHaveBeenCalledTimes(16);
      expect(callback).toBeCalledWith([0, 0, 0, 0]);
      expect(callback).toBeCalledWith([0, 0, 0, 1]);
      expect(callback).toBeCalledWith([0, 0, 1, 0]);
      expect(callback).toBeCalledWith([0, 0, 1, 1]);
      expect(callback).toBeCalledWith([0, 1, 0, 0]);
      expect(callback).toBeCalledWith([0, 1, 0, 1]);
      expect(callback).toBeCalledWith([0, 1, 1, 0]);
      expect(callback).toBeCalledWith([0, 1, 1, 1]);
      expect(callback).toBeCalledWith([1, 0, 0, 0]);
      expect(callback).toBeCalledWith([1, 0, 0, 1]);
      expect(callback).toBeCalledWith([1, 0, 1, 0]);
      expect(callback).toBeCalledWith([1, 0, 1, 1]);
      expect(callback).toBeCalledWith([1, 1, 0, 0]);
      expect(callback).toBeCalledWith([1, 1, 0, 1]);
      expect(callback).toBeCalledWith([1, 1, 1, 0]);
      expect(callback).toBeCalledWith([1, 1, 1, 1]);
    });
  });
});
