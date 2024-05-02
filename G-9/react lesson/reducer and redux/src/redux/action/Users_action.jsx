export const userAdd = (prop) => {
  return {
    type: 'create',
    payload: prop
  }
}
export const userRemove = (prop) => {
  return {
    type: 'remove',
    payload: prop
  }
}
