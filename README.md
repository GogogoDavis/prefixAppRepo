# prefixAppRepo

Set-up instructions------------------------------------------
^I did the funny dashes :--) 

1. Ensure you have nothing running on this projects relevant ports (:8080, :3000, :5432)
2. Assuming you're at this point, you've probably already cloned this from GitHub... But then again I don't know what kind of sorcery you instructors get up to in your free time. So in the event you've been using sorcery to get around cloning this from GitHub. Please do so now
3. Unfortunately while I realize having docker set-up for this would be great... I ran out of time. So in order for my backend knex functions to work properly you'll have to make your own container and database. The container name can be pretty much anything your heart desires. However, it is crucial that you name your database 'inventory_tables' in order for my fancy shmancy .env connection string to work. Also make sure you run your container within the postgres image and that your username and password match the string in the backends .env file. 
4. It's a good thing I decided to try and do a walkthrough myself of the setup, I'm now realizing .gitignores can be a bit silly with the .envs you put in them .......
5. 