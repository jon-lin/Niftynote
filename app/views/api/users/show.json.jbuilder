json.extract! @user, :id, :email

@user.notebooks.each do |notebook|
  json.set! notebook.id do
    json.extract! notebook, :id, :title, :defaultNotebook
  end
end

#if you want to put in a partial you can following this:
# json.partial! 'api/users/user', user: @user
