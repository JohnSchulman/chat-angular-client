import { SendPipe } from './send.pipe';

describe('SendPipe', () => {
  it('create an instance', () => {
    const pipe = new SendPipe();
    expect(pipe).toBeTruthy();
  });
});
