import React from "react";
import { useGetAllGamesForCurrentPageQuery } from "./services/freeToPlayGameApi";

function App() {
  const { data, isError, isLoading } = useGetAllGamesForCurrentPageQuery();

  if (isLoading) {
    return (
      <div>Загрузка...</div>
    );
  }

  if (isError) {
    return (
      <div>Ошибка!</div>
    );
  }

  return (
    <div>
      <div>
        {data.currentGamesList.map((game) =>
          <div key={game.id}>{game.title}</div>
        )}
      </div>
    </div>
  )
}

export default App;
