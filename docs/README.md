# Niftynote

* [Heroku link](https://niftynote.herokuapp.com/)
* [Trello link](https://trello.com/b/JfAYGhwV/niftynote)

## Minimum Viable Product

Inspired by Evernote, Niftynote is a full-stack web application that allows its users to seamlessly create, edit and organize their notes.  

Within two weeks, this app will demonstrate the following features with styling and smooth navigation:
- [ ] New account creation, user login and guest login
- [ ] Hosting on Heroku
- [ ] Notes
- [ ] Notebooks to organize notes
- [ ] Tags
- [ ] Rich-text editing
- [ ] Adequate seeding for demos
- [ ] Production README

## Design Documentation
* [View Wireframes][wireframes]
* [React components][components]
* [API endpoints][api-endpoints]
* [Database schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Setup backend and frontend User Authentication (2 days)

**Objective:** Allow users to securely create accounts, sign in and sign out of the web application

### Phase 2: Notebooks (2 days)

**Objective:** Setup notebooks that each have many notes and can also be created, read, updated and destroyed

### Phase 3: Build out notes component (3 days)

**Objective 1:** Setup CRUD (create, read, update and destroy) functionality for notes through the API

**Objective 2:** Add rich text editing so note text can be bolded, italicized, hyperlinked, etc.

### Phase 4: Tags (1 day)

**Objective:** Give users the ability to tag notes with multiple tags, untag notes and delete tags

### Phase 5 (Bonus): - Infinite scroll for notes index (W2 Friday)

**Objective:** Older notes in notes index are automatically fetched and rendered as user scrolls down

### Potential Bonus Features
- [ ] Allow sharing of notes/notebooks
- [ ] Add search for notes, notebooks and tags
- [ ] Set reminders on notes
- [ ] Work chat
- [ ] Mark notes as starred (shortcuts)
