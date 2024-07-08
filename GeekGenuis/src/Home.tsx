import { useEffect, useState } from "react";
import { Article } from "./interfaces/Article";

function Home() {
  // Récupérer tous les articles de db.json
  // les afficher sur la page Home dans une boucle .map()
  // Créer un bouton pour chaque article de façon individuelle pour aller sur la page de détail
  // Props ?
  // Page détail avec un bouton de retour sur Home Page
  // Navbar simple 
  
  const [data, setData] = useState<Article[]>([]);
  
  const getArticles = async() => {
      try {
          const response = await fetch("http://localhost:3000/articles")
          const result = await response.json()
          // je mets à jour mon state locale 
          setData(result)
          console.log(result);
      }catch(error) {
          // handle error
          alert('Echec du fetch ')
      }
  }
    useEffect(() => {
        // je fetch ma data
        getArticles()
    }, []);
    useEffect(() => {
      console.log(data);
      // Log data whenever it changes
    }, [data]);
  
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <h1>GeekGenuis</h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-800 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {data.map((article) => (
          <article className="p-4 md:w-1/3 sm:mb-0 mb-6" key={article.id}>
            <figure>
              <div className="rounded h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src={article.img + `?random=` + article.id} />
              </div>
              <figcaption className="p-3 bg-yellow-500 text-white">{article.category}</figcaption>
            </figure>
            <h2 className="text-xl font-medium title-font text-white mt-5">{article.titre}</h2>
            <p className="text-base leading-relaxed mt-2">{article.desc}</p>
            <p className="text-base leading-relaxed mt-2"><i>{article.signature}, le {article.createdAt}</i> </p>
            <a href={"/" + article.id} className="text-indigo-400 inline-flex items-center mt-3">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </article>
          ))}
         
        </div>
      </div>
      </section>
    </>
  )
}

export default Home
