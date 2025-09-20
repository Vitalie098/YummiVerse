const images = [
  'https://i.pinimg.com/736x/06/49/b4/0649b4c4673d66933ec67e5c031d70b0.jpg',
  'https://i.pinimg.com/736x/f6/7e/1d/f67e1dc87e7c81354a092f9c623ac6d5.jpg',
  'https://i.pinimg.com/736x/88/06/89/88068968ad79f5357718dadcb9ca66b9.jpg',
  'https://i.pinimg.com/736x/39/e4/b3/39e4b3f50dbf91acb8f26f10161694e9.jpg',
  'https://i.pinimg.com/1200x/bc/44/99/bc4499aa0af10d503ef8e9e8ef92efe6.jpg',
]

export const slides = [...Array(4).keys()].map((idx) => ({
    key: idx + 1,
    data: images,
  })
)
