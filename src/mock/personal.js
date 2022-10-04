function countAge() {
  const today = new Date()
  const birthDate = new Date('2001/08/09')
  let age = today.getFullYear() - birthDate.getFullYear()
  let month = today.getMonth() - birthDate.getMonth()

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }

  return age
}

export const personalData = {
  name: 'Gid Achmad Ahlul Fadli',
  age: countAge(),
  title: ['Undergraduate', 'Jomblo'],
  job: ' Software Engineering Student at Telkom University',
  introduction:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium nihil velit totam perferendis, error ullam doloribus aut numquam rerum, eveniet laborum dolorem quo vitae doloremque omnis quia molestias optio.',
}
