# SimpleSql
NPM Package for making sql connection easy.
## To Download: 
> npm init -y
> npm install simple-sql
## To Use:
make your database with mysql workbench then add the info of it to sqlconnection.json. For other info of the file you will need to add it to index.js file at the top.
Add your password and username in the sqlconnection.json file add your database info. Then customize the connection.json to add your queries.
Then use these commands in you files:
>    db.Insertuser('testerman', 'asd@gmail.com', '123123', 'Student')  
>    db.Updateuser('id', 'testerman134', 'abcd@gmail.com', 'password1', 'ADMIN')  
>    db.Deleteuser('testerman123')  
>    db.Selectuser('Test@gmail.com', 'Testing123', (result) => res.send(result))  
