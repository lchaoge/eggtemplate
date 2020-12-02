import { Service } from 'egg';

export default class Test extends Service {
  /**
   * sayHi to you
   * @param name - your name
   */
  public async find(id: any) {
    return await this.app.mysql.get('user', { id });
  }
}