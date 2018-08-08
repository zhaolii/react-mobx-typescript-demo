/**
 * 拼接查询字符串
 *
 * @param {Object} obj 查询数据对象
 * @return {string} 拼接后的字符串
 */
export const parseQuerystring = obj => {
    let result = ''
  
    if (obj) {
      const tmp = []
      const entries = Object.entries(obj)
  
      entries.forEach(item => {
        const key = item[0]
        const value = item[1]
  
        if (value instanceof Array && value.length) {
          value.forEach(v => {
            tmp.push(`${key}=${encodeURIComponent(v)}`)
          })
        } else {
          // tmp.push(`${key}=${encodeURIComponent(value)}`)
        }
      })
  
      result = tmp.join('&')
    }
  
    return result
  }