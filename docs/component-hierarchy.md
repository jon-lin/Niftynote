# Component Hierarchy

**Root**
- App

**Auth Form Container**
- Auth Form
  + Sign Up Splash
  + Sign In Plain
  + Sign Up Plain

**Home Container**
- Home
  + User status
  + Note Index Container
  + Note Top Bar
  + Sidebar

**Note Index Container**
- Note Index
  + Note Index Item
- Show/Edit Note
  + Add to new/existing notebook
  + Rich text editor

**New Note Form**
- Add to new/existing notebook
- Rich text editor

**Confirm Delete Note/Notebook/Tag**

**Error List Component**

**Notebook Index Container**
- Notebook index
  + Notebook index item
- Create/update notebook bar
- Notebook search (bonus)
- Show Notebook (header)
- Note Index Container

**New Notebook Form**

**New Tag Form**

**Tag Index Container**
- Tag Index
- Tax Index Item
- Tag Search (bonus)

**Search Notes** (bonus)

**Shortcut Index Container** (bonus)
 - Shortcut Index

**Trash folder** (bonus)

# Routes

|Path                           | Component                |
|-------------------------------|--------------------------|
| /hello                        | AuthFormContainer        |
| /                             | AuthFormContainer        |
| /signup                       | AuthFormContainer        |
| /signin                       | AuthFormContainer        |
| /home                         | HomeContainer            |
| /notes/:noteId                | NoteIndexContainer       |
| /newnote                      | NewNoteForm              |
| /delete/:noteId               | ConfirmDelete            |
| /delete/:notebookId           | ConfirmDelete            |
| /delete/:tagId                | ConfirmDelete            |
| /notebooks                    | NotebookIndexContainer   |
| /notebooks/:notebookId        | NotebookIndexContainer   |
| /newnotebook                  | NewNotebookForm          |
| /newtag                       | NewTagForm               |
| /tags                         | TagIndexContainer        |
| /search/notes                 | SearchNotes              |
| /search/tags                  | SearchTags               |
| /search/notebooks             | SearchNotebooks          |
| /shortcuts                    | Shortcuts                |
