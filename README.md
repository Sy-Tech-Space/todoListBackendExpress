# todoListBackend
This project uses express.js (web application framework for Node.js)

The code structure follows MVC (Model-View-Controller) pattern where the model (Tasks) interacts with the database, the service layer (TaskService) abstracts the business logic, and the controller (controller.js) handles HTTP requests and responses. 
The database configuration is separated for better organization and reusability.



Script used for creating database locally in Postgres: 

-- Column: public."Tasks".id

-- ALTER TABLE IF EXISTS public."Tasks" DROP COLUMN IF EXISTS id;
create sequence "unique";
ALTER TABLE IF EXISTS public."Tasks"
    ADD COLUMN id SERIAL PRIMARY KEY, 
	Add column title varchar(255) not null;
	
INSERT INTO "Tasks" (title)
VALUES ('Cleaning');

INSERT INTO "Tasks" (title)
VALUES ('Cook');

SELECT * FROM "Tasks";

