export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Stu',
        avatar: 'http://someurl.com/image',
        uid: 'stuman',
      })
    }, 2000)
  })
}
