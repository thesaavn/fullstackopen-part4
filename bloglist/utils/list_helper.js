const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  if (!blogs.length) return null
  
  const topBlog =  blogs.reduce((top, blog) => blog.likes > top.likes ? blog : top, blogs[0])
  const {title, author, likes} = topBlog

  return {title, author, likes}
}

const mostBlogs = (blogs) => {
  const authorsObject = blogs.reduce((authors, {author}) => {
    if (!authors[author]) {
      authors[author] = { author, blogs: 1}
    } else {
      authors[author].blogs += 1
    }
  
    return authors
  }, {})

  const authors = Object.values(authorsObject)
  const authorWithMostBlogs = authors.reduce((max, author) => author.blogs > max.blogs ? author : max, authors[0])
  
  return authorWithMostBlogs
}

const mostLikes = (blogs) => {
  const authorsObject = blogs.reduce((authors, blog) => {
    if (!authors[blog.author]) {
      authors[blog.author] = { author: blog.author, likes: blog.likes }
    } else {
      authors[blog.author].likes += blog.likes
    }
    
    return authors
  }, {})

  const authors = Object.values(authorsObject)
  const authorWithMostLikes = authors.reduce((max, author) => author.likes > max.likes ? author : max, authors[0])
  
  return authorWithMostLikes
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}