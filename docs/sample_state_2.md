```js
{
  session: {
    currentUser: {
      email,
      id
    },
    errors: {}
  },

  notes: {
    1: {
      id: 1,
      title: "The Very First Title",
      body: "The Very First Body",
      tags: { 0: 1, 1: 2}
    }

    2: {
      id: 2,
      title: "Second Note",
      body: "Another note",
      tags: { 0: 1, 1: 4}
    }
  }

  notebooks: {
    1: {
      id: 1,
      title: "My First Notebook",
      notes: { 0: 1, 1: 2 },
    }
  }

  tags: {
    1: {
      id: 1,
      name: "Tag 1",
      notes: { 0: 1, 1: 2, 2: 3},
    }
  }
}
```
