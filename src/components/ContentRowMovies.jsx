import Card from './Card';

const cardsDash = [
  {
    title: 'Movies in Data Base',
    cuantity: 21,
    icon: 'fa-film',
    color: 'primary'
  },
  {
    title: 'Total awards',
    cuantity: 79,
    icon: 'fa-film',
    color: 'success'
  },
  {
    title: 'Actors quantity',
    cuantity: 49,
    icon: 'fa-award',
    color: 'warning'
  },
  {
    title: 'Actors quantity',
    cuantity: 49,
    icon: true,
    color: 'warning'
  },
];

const ContentRowMovies = () => {
  return (
    <div className='row'>
      {
        cardsDash.map((card, index) => {
          return <Card {...card} key={`card-movies-${index}`} />
        })
      }
    </div>
  )
}

export default ContentRowMovies;