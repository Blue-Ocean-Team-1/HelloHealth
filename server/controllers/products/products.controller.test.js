const productsController = require('./index');

describe('Products API Controller', () => {
  const req = { query: {}, body: {} };

  it('should contain controller functions', () => {
    Object.keys(productsController).forEach((key) => {
      expect(typeof productsController[key] === 'function');
    });
  });

  it('should accept and invoke (res, req)', () => {
    Object.keys(productsController).forEach((key) => {
      const status = jest.fn(() => ({
        send: () => {},
        json: () => {},
      }));

      const res = {
        status,
      };

      productsController[key](req, res);
      expect(status.mock.calls.length).toBeDefined();
    });
  });
});
