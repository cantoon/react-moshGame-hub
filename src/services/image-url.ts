const getCroppedImageUrl = (url: string) => {
  const target = 'media/'
  console.log(target)
  const index = url.indexOf(target) + target.length
  console.log(index)
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}

export default getCroppedImageUrl
