import { Helmet } from 'react-helmet-async'

const images = [
  {
    src: 'https://images.pexels.com/photos/4492126/pexels-photo-4492126.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Factory floor'
  },
  {
    src: 'https://images.pexels.com/photos/3771811/pexels-photo-3771811.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Cutting and stitching'
  },
  {
    src: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Quality checks'
  },
  {
    src: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Product samples'
  },
  {
    src: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Men wear sample'
  },
  {
    src: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Women wear sample'
  },
  {
    src: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Kids wear sample'
  }
]

export default function Gallery() {
  return (
    <div>
      <Helmet>
        <title>Gallery | Garment Manufacturing</title>
        <meta
          name="description"
          content="Factory images and product samples from our garment manufacturing process."
        />
      </Helmet>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
        <h1 className="text-3xl font-bold text-slate-900">Gallery</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          A glimpse of our factory workflow and the quality of our garment samples.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <div key={img.src} className="overflow-hidden rounded-2xl border bg-white">
              <div className="aspect-[4/3]">
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

