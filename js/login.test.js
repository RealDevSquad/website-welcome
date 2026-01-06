import {
  describe,
  expect,
  it,
  jest,
  beforeEach,
  afterEach,
} from '@jest/globals';

describe('login.js - fetchData', () => {
  let originalFetch;
  let originalLocation;

  beforeEach(() => {
    // Mock fetch
    originalFetch = global.fetch;
    global.fetch = jest.fn();

    // Mock window.location
    originalLocation = window.location;
    delete window.location;
    window.location = { replace: jest.fn() };

    // Mock DOM elements
    document.body.innerHTML = `
      <div class="skeleton-holder"></div>
      <button class="btn-login-text"></button>
      <div class="user-greet"></div>
      <div class="user-greet-msg"></div>
      <img class="user-profile-pic" />
    `;
  });

  afterEach(() => {
    global.fetch = originalFetch;
    window.location = originalLocation;
    jest.clearAllMocks();
  });

  it('should redirect to new-signup URL when user has incomplete details', async () => {
    const mockResponse = {
      incompleteUserDetails: true,
    };

    global.fetch.mockResolvedValueOnce({
      json: async () => mockResponse,
    });

    // Import and execute the module
    const module = await import('./login.js');

    // Trigger DOMContentLoaded event
    const event = new Event('DOMContentLoaded');
    window.dispatchEvent(event);

    // Wait for fetch to complete
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(window.location.replace).toHaveBeenCalledWith(
      'https://www.realdevsquad.com/new-signup',
    );
  });

  it('should not redirect when user details are complete', async () => {
    const mockResponse = {
      username: 'testuser',
      first_name: 'Test',
      picture: { url: 'https://example.com/pic.jpg' },
    };

    global.fetch.mockResolvedValueOnce({
      json: async () => mockResponse,
    });

    // Import and execute the module
    await import('./login.js');

    // Trigger DOMContentLoaded event
    const event = new Event('DOMContentLoaded');
    window.dispatchEvent(event);

    // Wait for fetch to complete
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(window.location.replace).not.toHaveBeenCalled();
  });

  it('should handle API errors gracefully', async () => {
    const mockResponse = {
      error: 'Unauthorized',
    };

    global.fetch.mockResolvedValueOnce({
      json: async () => mockResponse,
    });

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    // Import and execute the module
    await import('./login.js');

    // Trigger DOMContentLoaded event
    const event = new Event('DOMContentLoaded');
    window.dispatchEvent(event);

    // Wait for fetch to complete
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(window.location.replace).not.toHaveBeenCalled();

    consoleErrorSpy.mockRestore();
  });
});
