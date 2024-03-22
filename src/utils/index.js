import toast from 'react-hot-toast'

export const getBlogs = () => {
  let blogs = [];
  let storageBlogs = localStorage.getItem('blogs')
  if (storageBlogs) {
    blogs = JSON.parse(storageBlogs)
  }
  return blogs
}

// save
export const saveBlog = (blog) => {
  let blogs = getBlogs()
  const isExist = blogs.find(b => b.id === blog.id)
  if (isExist) {
    return toast.error('Already Bookmarked!')
  }
  else {
    blogs.push(blog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    toast.success("Blog Bookmarked Successfully!");
  }
}

// delete
export const deleteBlog = (id) => {
  let blogs = getBlogs()
  const remaining = blogs.filter(b => b.id !== id)
  localStorage.setItem('blogs', JSON.stringify(remaining))
  toast.success('Blog Removed from Bookmark!')
}

