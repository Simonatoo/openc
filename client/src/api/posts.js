const button = document.querySelector('#btn').addEventListener('click', () => {createPost()})
const input = document.querySelector('#ipt')
const list = document.querySelector('#postList');

const createPost = async () => {
  try {
    const res = await fetch('http://localhost:3030/createPost', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        "title": "o Bê da Renata",
        "content": input.value
      })
    }) 

    if (res.ok) {
      //updateNewPost()
      return console.log('Post criado')
    }

    console.error('Erro na requisição', res.status)
  } catch (err) {
    console.error(err)
  }
}