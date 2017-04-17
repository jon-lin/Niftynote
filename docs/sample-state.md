```js
{
  session: {
    currentUser: {
      username,
      id
    },
    errors: {}
  },

  notes: {
    1: {
      id: 1,
      title: "The Very First Title",
      body: "The Very First Body",
      author_id: 1,
      notebook_id: 1,
      tags: { 0: 1, 1: 2}
    }

    2: {
      id: 2,
      title: "Second Note",
      body: "Another note",
      author_id: 1,
      notebook_id: 1,
      tags: { 0: 1, 1: 4}
    }
  }

  notebooks: {
    1: {
      id: 1,
      title: "My First Notebook",
      notes: { 0: 1, 1: 2 },
      author_id: 1
    }
  }

  tags: {
    1: {
      id: 1,
      name: "Tag 1",
      notes: { 0: 1, 1: 2, 2: 3},
      author_id: 1
    }
  }
}
```
