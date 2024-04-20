# todoListBackend

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


