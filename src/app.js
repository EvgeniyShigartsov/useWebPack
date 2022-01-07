const getData = () => {
  const arr = new Array(10).fill(0).map((_, index) => index + 1)

  return new Set(arr)
}

console.log(getData())