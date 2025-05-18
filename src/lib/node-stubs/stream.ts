// Empty implementation of the stream module for browser environments
export class Readable {
  pipe(): any {
    return {};
  }
  
  on(): any {
    return this;
  }
  
  read(): any {
    return null;
  }
}

export class Writable {
  write(): boolean {
    return true;
  }
  
  end(): void {
    // No-op
  }
  
  on(): any {
    return this;
  }
}

export class Transform extends Readable {
  constructor() {
    super();
  }
  
  write(): boolean {
    return true;
  }
  
  end(): void {
    // No-op
  }
}

export default {
  Readable,
  Writable,
  Transform,
  pipeline: () => {},
  finished: () => {}
}; 