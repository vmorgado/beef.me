import * as uuid from 'uuid'

export default function (user) {
  return {
    uuid: uuid,
    user: user,
    generateId: function () {
      return this.uuid() + '-' + user
    }
  }
}
