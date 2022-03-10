import Head from 'next/head'
import Card from '../components/Card'
import Header from '../components/Header'
import { sanityClient }  from '../sanity'
import {Post} from '../typing'

interface Props {
  posts: [Post]
}

const Home: any = ({posts}: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'>
            <span className='underline decoration-black decoration-4'>НБК</span> - это место для чтения, обсуждения, мира NFT и Блокчейна
          </h1>
          <h2>
          NБК представляет собой сочетание передовых деловых и технологических событий, предпринимательских инициатив, творческих обменов, концепций образа жизни и идей лидерства.Здесь актуальные и интересные новости о передовых технологиях,блокчейне,NFT и криптовалюте.
          </h2>
        </div>
      </div>
      {/* posts */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
       {
       posts.map((post: Post) => {
         return <Card key={post._id} post={post} />
       })
       }
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
  _id,
  title,
  slug,
  descriptions,
  mainImage,
  author -> {
  name,
  image,
}
}
  `;

  const posts = await sanityClient.fetch(query);

  return {
    props:{
      posts,
    }
  }
}

export default Home
