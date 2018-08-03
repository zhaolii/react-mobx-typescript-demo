/**
 * localStorage.js
 * @author lihuanji
 */
const ls = window.localStorage

function get(key: string): any {
  return JSON.parse(ls.getItem(key))
}

function set(key: string, value: any): boolean {
  try {
    ls.setItem(key, JSON.stringify(value))
    return true
  } catch (e) {
    return false
  }
}

function remove(key: string): void {
  return ls.removeItem(key)
}

function clear(): void {
  return ls.clear()
}

export default {
  set,
  get,
  remove,
  clear,
}
