const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

const listWithOneBlog = [
  {
    "_id": "67ad639c85e7cfba3d8a5fa1",
    "title": "fullstackopen web dev",
    "author": "noname",
    "url": "https://fullstackopen.com/en",
    "likes": 24,
    "__v": 0
  },
]

const listWithMultipleBlogs = [
  {
    "_id": "67ad639c85e7cfba3d8a5fa1",
    "title": "fullstackopen web dev",
    "author": "noname",
    "url": "https://google.com",
    "likes": 24,
    "__v": 0
  },
  {
    "_id": "67ad85b1047e109d4960f047",
    "title": "learning part4-testing backend",
    "author": "youm",
    "url": "https://google.com",
    "likes": 67,
    "__v": 0
  },
  {
    "_id": "67ade90bee12ff7184e900a6",
    "title": "github is cool",
    "author": "noname",
    "url": "https://google.com",
    "likes": 289,
    "__v": 0
  },
  {
    "_id": "67af329d3334edf8a7f865e0",
    "title": "React patterns",
    "author": "Michael Chan",
    "url": "https://reactpatterns.com/",
    "likes": 7,
    "__v": 0
  },
  {
    "_id": "67af32c83334edf8a7f865e2",
    "title": "Go To Statement Considered Harmful",
    "author": "Edsger W. Dijkstra",
    "url": "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    "likes": 5,
    "__v": 0
  },
  {
    "_id": "67af32ef3334edf8a7f865e4",
    "title": "Canonical string reduction",
    "author": "Edsger W. Dijkstra",
    "url": "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    "likes": 12,
    "__v": 0
  },
  {
    "_id": "67af330f3334edf8a7f865e6",
    "title": "Canonical string reduction",
    "author": "First class tests",
    "url": "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.html",
    "likes": 10,
    "__v": 0
  }
]

describe('favorite blog', () => {
  test('of empty list returns null', () => {
    const result =  listHelper.favoriteBlog([])
    assert.deepStrictEqual(result, null)
  })

  test('of list with only one blog, returns the same blog', () => {
    const result = listHelper.favoriteBlog(listWithOneBlog)
    assert.deepStrictEqual(result, {
      "title": "fullstackopen web dev",
      "author": "noname",
      "likes": 24,
    })
  })

  test('of list with multiple blogs, returns one with most likes', () => {
    const result = listHelper.favoriteBlog(listWithMultipleBlogs)
    assert.deepStrictEqual(result, {
      "title": "github is cool",
      "author": "noname",
      "likes": 289,
    })
  })
})

describe('total likes', () => {
  test('of empty list is zero', () => {
    const result = listHelper.totalLikes([])
    assert.strictEqual(result, 0)
  })
  
  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    assert.strictEqual(result, 24)
  })

  test('of a bigger list is calculated right', () => {
    const result = listHelper.totalLikes(listWithMultipleBlogs)
    assert.strictEqual(result, 414)
  })
})

describe('most blogs', () => {
  test('returns author with the most blogs', () => {
    const result = listHelper.mostBlogs(listWithMultipleBlogs)
    assert.deepStrictEqual(result, { author: 'noname', blogs: 2 })
  })
})

describe('most likes', () => {
  test('returns author with the most likes in blogs', () => {
    const result = listHelper.mostLikes(listWithMultipleBlogs)
    assert.deepStrictEqual(result, { author: 'noname', likes: 313})    
  })
})

test('dummy returns one',() => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})