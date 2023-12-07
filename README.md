# prefixAppRepo

Set-up instructions------------------------------------------
^I did the funny dashes :--) 

**starting note, I have a tendency to leave silly console.logs or seed data. It makes the code process more enjoyable in my opinion. So be ready for funky console.logs or seeded data

1. Ensure you have nothing running on this projects relevant ports (:8080, :3000, :5432)
2. Assuming you're at this point, you've probably already cloned this from GitHub... But then again I don't know what kind of sorcery you instructors get up to in your free time. So in the event you've been using sorcery to get around cloning this from GitHub. Please do so now
3. Unfortunately while I realize having docker set-up for this would be great... I ran out of time. So in order for my backend knex functions to work properly you'll have to make your own container and database. The container name can be pretty much anything your heart desires. However, it is crucial that you name your database 'inventory_tables' in order for my fancy shmancy .env connection string to work. Also make sure you run your container within the postgres image and that your username and password match the string in the backends .env file. 
4. It's a good thing I decided to try and do a walkthrough myself of the setup, I'm now realizing .gitignores can be a bit silly with the .envs you put in them .......
5. Now that database should be good, cd into prefixAppRepo and then backend and do npm i express. Then we'll migrate the tables and seed into the tables by running <npx knex migrate:latest> followed by <npx knex seed:run>. Now you can check in your terminal or with postman to make sure everything seeded. 
6. In your backend run <npm start> and keep that terminal open
7. In a new terminal now we'll set up the frontend. Start by doing a cd back to the prefixAppRepo and then into frontend followed by groccery_daze. Now we can add your copy of node-modules by running <npm i react>.
8. Now in the same directory run <npm start> and on the app either make a new admin or look at the seed file to put in some pre-built username and passwords to test eveything.

*App Instructions 
1. When logged in, you can edit, add, and delete as many items as you'd like however changes don't take hold until you logout to the user view. New Entry is centered at the bottom of the list. 
2. For the AddAdmin and New Entry the POST requests are a little slow (google tells me it may be some weird network issue) so plz be patient and feel free to spam the button. 
3. Logging out of the admin view will allow you to see all the changes and see the user view. 

*Notes 
Due to time constraints css isn't too crazy and some pathing isn't too intuitive. Some of my future stetch goals would be 
1. Finalize css 
2. Make pathing more intuitive 
3. SPEND MORE TIME PLANNING! I feel like hearing I had 72 hours to complete this made me panic ever so slightly and fo straight into code...But I more than likely lost more time in failed components than I would've with proper planning. 
4. For some reason some of my post requests are a little slow, so I'd either have to wait a second or hit the relevant button until it worked (button-mash)... In the future I'd love to figure out why that request in particular is a little slower. 
5. Implement a better login system, for now I tested my logic with the backend and learned methods to pull data from there to verify. But I know it's certainly not the safest way to store data. 
6. Figure out the weird slow POST issues I ran into 
7. Overall make the admin/user experience more enjoyable. 
**Takeaways 
1. Overall a good experience, definitely a good amount of stress and toil. But I learned a ton and by digging into documentation and really taking full advantage of Google I got to learn of approaches to problems and learn how to apply a bit of a different lens to problems. Like the .some method for filtering through my array in order to return a bool was awesome for admin verification. 
