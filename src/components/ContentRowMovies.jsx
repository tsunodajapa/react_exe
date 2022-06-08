import Card from "./Card";

const ContentRowMovies = () => {
  return (
    <div class="row">
      <Card
        title="Movies in Data Base"
        cuantity={21}
        icon="fa-film"
        color="primary"
      />
      <Card
        title="Total awards"
        cuantity={79}
        icon="fa-award"
        color="success"
      />
      <Card
        title="Actors quantity"
        cuantity={49}
        icon="fa-user"
        color="warning"
      />
    </div>
  )
}

export default ContentRowMovies;