import { useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';

export const NewMovie
  = ({ onAdd }: { onAdd: (movie: Movie) => void }) => {
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [imdbUrl, setImdbUrl] = useState('');
    const [imdbId, setImdbId] = useState('');

    const formReset = () => {
      setTitle('');
      setDescription('');
      setImgUrl('');
      setImdbUrl('');
      setImdbId('');
    };

    const isAddButtonDisabled = () => {
      return !(title.trim()
        && imgUrl.trim()
        && imdbUrl.trim()
        && imdbId.trim());
    };

    const handleSubmit = (): void => {
      onAdd({
        title, description, imgUrl, imdbUrl, imdbId,
      });

      formReset();

      setCount((prevCount) => prevCount + 1);
    };

    return (
      <form className="NewMovie" key={count} onSubmit={handleSubmit}>
        <h2 className="title">Add a movie</h2>

        <TextField
          name="title"
          label="Title"
          value={title}
          onChange={setTitle}
          required
        />

        <TextField
          name="description"
          label="Description"
          onChange={setDescription}
          value={description}
        />

        <TextField
          name="imgUrl"
          label="Image URL"
          value={imgUrl}
          onChange={setImgUrl}
          required
        />

        <TextField
          name="imdbUrl"
          label="Imdb URL"
          value={imdbUrl}
          onChange={setImdbUrl}
          required
        />

        <TextField
          name="imdbId"
          label="Imdb ID"
          value={imdbId}
          onChange={setImdbId}
          required
        />

        <div className="field is-grouped">
          <div className="control">
            <button
              type="submit"
              data-cy="submit-button"
              className="button is-link"
              disabled={isAddButtonDisabled()}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    );
  };
