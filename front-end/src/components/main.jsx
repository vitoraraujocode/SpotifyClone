import ItemList from "./ItemList";
import { artistArray } from "../database/artists";
import { songsArray } from "../database/songs";
const Main = ({ type }) => {
  return (
    <div className="main">
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={8}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <> </>
      )}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={16}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <> </>
      )}
    </div>
  );
};

export default Main;
