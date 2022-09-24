import '../../../../css/sidebar.css'
import Authenticated from '@/Layouts/Authenticated/Index'
import Flickity from 'react-flickity-component'
import { Head } from '@inertiajs/inertia-react'
import FeaturedMovie from '@/Components/FeaturedMovie'
import MovieCard from '@/Components/MovieCard'

export default function Dashboard({ auth, featuredMovies, movies }) {
  const flickityOptions = {
    cellAlign: 'left',
    contain: true,
    groupCells: 1,
    wrapAround: false,
    pageDots: false,
    prevNextButtons: false,
    draggable: '>1',
  }
  return (
    <Authenticated auth={auth}>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flickity@2/dist/flickity.min.css"
        />
      </Head>
      <title>Dashboard</title>
      <div>
        <div className="font-semibold text-[22px] text-black mb-4">
          Featured Movies
        </div>
        <Flickity className="gap-[30px]" options={flickityOptions}>
          {featuredMovies.map((featuredMovies) => (
            <FeaturedMovie
              key={featuredMovies.id}
              slug={featuredMovies.slug}
              name={featuredMovies.name}
              category={featuredMovies.category}
              thumbnail={featuredMovies.thumbnail}
              rating={featuredMovies.rating}
            />
          ))}
        </Flickity>
      </div>

      <div className="mt-[50px]">
        <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
        <Flickity className="gap-[30px]" options={flickityOptions}>
          {/* Movies  */}
          {movies.map((Movie) => (
            <MovieCard
              key={Movie.id}
              slug={Movie.slug}
              name={Movie.name}
              category={Movie.category}
              thumbnail={Movie.thumbnail}
            />
          ))}
        </Flickity>
      </div>
    </Authenticated>
  )
}
