const d1 = new Date()
const d2 = new Date()
const { v4: uuidv4 } = require('uuid')

const db = {
  posts: [
    {
      id: uuidv4(),
      date: `${d1.toDateString()} ${d1.toLocaleTimeString()}`,
      authorName: 'John',
      message: 'Hi there!',
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      rating: 0,
    },
    {
      id: uuidv4(),
      date: `${d2.toDateString()} ${d2.toLocaleTimeString()}`,
      authorName: 'Mike',
      message: 'Whats up!',
      image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg',
      rating: 0,
    },
  ],
  users: [

  ],
}

module.exports = {
  db,
}
