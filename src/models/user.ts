export class User {
  constructor(data?: any) {
    Object.assign(this, data);
  }
  readonly id?: string;
  login?: string;
  avatar?: string;
  repository?: string;
}
