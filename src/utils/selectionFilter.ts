const selectionFilter = ({ series }: any, { films }: any) => {
  return {
    series: [
      {
        title: "Documentaries",
        data: series.filter(
          (item: { genre: string }) => item.genre === "documentaries"
        ),
      },
      {
        title: "Comedies",
        data: series.filter(
          (item: { genre: string }) => item.genre === "comedies"
        ),
      },
      {
        title: "Children",
        data: series.filter(
          (item: { genre: string }) => item.genre === "children"
        ),
      },
      {
        title: "Crime",
        data: series.filter(
          (item: { genre: string }) => item.genre === "crime"
        ),
      },
      {
        title: "Feel Good",
        data: series.filter(
          (item: { genre: string }) => item.genre === "feel-good"
        ),
      },
    ],
    films: [
      {
        title: "Drama",
        data: films.filter((item: { genre: string }) => item.genre === "drama"),
      },
      {
        title: "Thriller",
        data: films.filter(
          (item: { genre: string }) => item.genre === "thriller"
        ),
      },
      {
        title: "Children",
        data: films.filter(
          (item: { genre: string }) => item.genre === "children"
        ),
      },
      {
        title: "Suspense",
        data: films.filter(
          (item: { genre: string }) => item.genre === "suspense"
        ),
      },
      {
        title: "Romance",
        data: films.filter(
          (item: { genre: string }) => item.genre === "romance"
        ),
      },
    ],
  };
};

export default selectionFilter;
