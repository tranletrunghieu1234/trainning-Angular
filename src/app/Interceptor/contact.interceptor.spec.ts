import { TestBed } from '@angular/core/testing';

import { ContactInterceptor } from './contact.interceptor';

describe('ContactInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ContactInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ContactInterceptor = TestBed.inject(ContactInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
