import React from 'react';
// import {
//   render,
//   screen,
//   fireEvent,
// } from '../../../test-utils';

import {
  uploadUserAccountType,
  fetchUserAccountType,
} from './index';

const mockUser = jest.mock('mockUser');

describe('User API Controller', () => {
  it('should query save and return the userAccountType', (done) => {
    const mockAccountType = mockUser.customer_type;

    const mockCallback = jest.fn((result) => {
      expect(result).toBe(mockAccountType);
      done();
    });

    uploadUserAccountType(mockUser.user_id, mockAccountType, mockCallback);
  });

  it('should get user account details', (done) => {
    const mockCallback = jest.fn((result) => {
      expect(result).toBeDefined();
      done();
    });

    fetchUserAccountType(mockUser.user_id, mockCallback);
  });
});
