const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => blog.likes += sum, 0)
}

const favoriteBlog = (blogs) => {
  if (!blogs.length) return null
  
  const topBlog =  blogs.reduce((top, blog) => blog.likes > top.likes ? blog : top, blogs[0])
  const {title, author, likes} = topBlog
  return {title, author, likes}
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}