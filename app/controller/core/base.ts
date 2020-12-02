import { Controller } from 'egg';

export default class BaseController extends Controller {

  public get user() {
    return this.ctx.session.user;
  }

  public success(data: any,result: string = '操作成功！') {
    this.ctx.body = {
      code: '0000',
      data,
      result
    };
  }

  public error(result: string = '系统错误！') {
    this.ctx.body = {
      code: '9999',
      data: null,
      result
    };
  }

  public notFound(result: string = 'not found') {
    this.ctx.throw(404, result);
  }
}