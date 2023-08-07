import axios from 'axios'
import './App.css'
import { useState } from 'react'

function App() {

  const [animes, setAnimes ] = useState([])
  
  const  handleSubmit = (e) => {
      e.preventDefault()
      const amine = e.target.animeName.value

      const url = `https://api.jikan.moe/v4/anime?q=${amine}`

      axios.get(url)
            .then(({data}) => setAnimes(data.data))
            .catch((error) => console.log(error))


  }

  return (
    
    <main className='bg-black min-h-screen text-white p-4'>
         <h1 className='text-3xl font-bold text-center mb-4'>Anime Seach</h1>
         <form onSubmit={handleSubmit} className='flex rounded-md overflow-hidden max-w-max mx-auto'>
              <input   id='animeName' type="text" placeholder='type your anime...💀' className='text-black p-2'/>
              <button className='bg-green-500 px-4'> Search</button>
         </form>

         <section className='grid gap-4  grid-cols-[repeat(auto-fill,_180px)] justify-center max-w-[1500px] mx-auto mt-5'>
            {
              animes.map((animex) => (
                <article key={animex.mal_id} className='bg-white text-black rounded-md overflow-hidden'>
                  <div className='h-[240px] overflow-hidden'>
                    <img className='h-full block object-cover' src={animex.images.webp.large_image_url} alt="" />
                  </div>
                  <section className='p-2'>
                    <h4 className='text-sm my-2 font-bold line-clamp-1'>{animex.title}</h4>
                    <p className='line-clamp-6 text-xs'>{animex.synopsis}</p>
                  </section>
                </article>
              ))
            }
         </section>
    </main>
  )
}

export default App


//! //COMO UTILIZAR TAILWIND
// <h1 className='bg-gray-500 mx-20 text-3xl text-center  hover:bg-blue-800 hover:text-yellow-200'>clases.3.1</h1>
//       <button className='button'>buscra</button>
//       <button className='button'>buscra</button>


//https://api.jikan.moe/v4/anime

//{animex.images.webp.image_url}
