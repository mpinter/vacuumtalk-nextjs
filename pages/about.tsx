import { useState } from 'react'

const About = () => {
  const [title, setTitle] = useState('About')
  return (
    <>
      <h1>{title}</h1>
      Edit title
      <input onChange={(event) => setTitle(event.target.value)} value={title} />
      <div>
        Dolore irure laborum consequat officia sit irure aliqua culpa qui ipsum.
        Ex in aute esse veniam voluptate duis ipsum ea officia et tempor culpa
        mollit pariatur. Nulla aliqua elit eu dolor laborum. Cupidatat aliquip
        irure excepteur dolore. Mollit exercitation do adipisicing id. Excepteur
        dolor reprehenderit aliqua laboris dolore mollit velit culpa velit irure
        excepteur mollit excepteur. Magna sit aute reprehenderit ad occaecat
        proident exercitation. Dolor et laborum tempor quis esse. Lorem do nisi
        proident magna cupidatat eiusmod ex sint esse proident anim aliqua. Do
        aliquip fugiat exercitation officia cillum eu in ut. Do officia et quis
        laborum cupidatat qui mollit eiusmod.
      </div>
      <button
        onClick={() =>
          fetch('/api/hello')
            .then((r) => r.json())
            .then((r) => alert(r.greeting))
        }
      >
        Call API Endpoint
      </button>
    </>
  )
}

export default About
