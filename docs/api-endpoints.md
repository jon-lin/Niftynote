# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Notes

- `GET /api/notes`
  - Fetches notes for current user
  - Narrows down results for specific tag names
  - Narrows down results for a specific notebook
  - Narrows down results by search query (bonus)
- `POST /api/notes`
- `GET /api/notes/:id`
- `PATCH /api/notes/:id`
- `DELETE /api/notes/:id`

### Notebooks

- `GET /api/notebooks`
- `POST /api/notebooks`
- `GET /api/notebooks/:id`
  - (when notebook is fetched, notes for notebook should
    also be fetched through specific GET request to /api/notes)
- `PATCH /api/notebooks/:id`
- `DELETE /api/notebooks/:id`

### Tags

- `GET /api/tags` (when user clicks on Tags sidebar button)
  - fetches tag index for current user
- `DELETE /api/tags/:tag_id`
  - delete a tag entirely
- `GET /api/notes/:note_id/tags`
  - fetches tags for a specific note
- `POST /api/notes/:note_id/tags`
  - create a tag, add to existing note
