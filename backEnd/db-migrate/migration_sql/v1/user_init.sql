CREATE TABLE IF NOT EXISTS wiprocurement.user
(
  EMPLID VARCHAR(22),
  NAME_A VARCHAR(100),
  EMAIL_ADDRESS VARCHAR(100),
  PHONE VARCHAR(30),
  SUPERVISOR_ID VARCHAR(22),
  IS_ME BOOLEAN NOT NULL DEFAULT FALSE,
  IS_CE BOOLEAN NOT NULL DEFAULT FALSE,
  IS_EE BOOLEAN NOT NULL DEFAULT FALSE,
  IS_SUPERUSER BOOLEAN NOT NULL DEFAULT FALSE,
  INSDATE TIMESTAMP WITH TIME ZONE,
  login_time TIMESTAMP WITH TIME ZONE,
  login_fail_count INTEGER DEFAULT 0,
  DEPTID VARCHAR(20),
  PRIMARY KEY (EMPLID)
 );
