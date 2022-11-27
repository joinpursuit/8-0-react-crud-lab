import React from "react";

export default function MoviesNewForm() {
  return (
    <div>
      <form>
        <label for="new-movie">New Movie</label>
        <input id="new-movie" name="new-movie" type="text" />
      </form>
    </div>
  );
}
