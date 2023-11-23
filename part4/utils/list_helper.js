const dummy = () => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.length === 0
    ? 0
    : blogs.reduce((acc, blog) => acc + blog.likes, 0) / blogs.length
}

const favorite = (blogs) => {
  return blogs.length === 0
    ? 0
    : Math.max(...blogs.map(blog => blog.likes))
}

module.exports = {
  dummy, totalLikes, favorite
}