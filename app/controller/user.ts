import BaseController from './core/base'

export default class UserController extends BaseController {
  public async info() {
    const ctx = this.ctx;
    const { id } = ctx.request.body;
    if(id === undefined || id === '' || id === null){
      this.error('请输入id')
      return false
    }
    const user = await ctx.service.user.find(id);
    if(user === null){
      this.error('未找到用户信息')
      return false
    }
    this.success(user)
  }
}
