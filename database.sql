create database coms;

use coms;

create table Persons(id varchar(8) Primary Key,name varchar(255),mobileNo varchar(10) unique,address varchar(255));

create table Incharge(id varchar(7) primary key, foreign key (id) references Persons(id));

create table Venue(id varchar(7) primary key,venueName varchar(255),location varchar(255));

create table Contests(id varchar(7) primary key,contestName varchar(255),inchargeId varchar(8),venueId varchar(7), foreign key (inchargeId)references Incharge(id),foreign key (venueId) references Venue(id));

create table ParticipantsEvents (pid varchar(7),eid varchar(7),score int, primary key(pid,eid), foreign key (pid) references Persons(id), foreign key (eid) references Contests(id));

create table judge(judgeID varchar(7), foreign key (judgeId) references Persons(id));

create table schedule (Contest varchar(7) unique,date date,time time,foreign key (Contest) references Contests(id)); 

create table Results(pid varchar(7),eid varchar(7),pos int,primary key(pid,eid),foreign key (pid) references Persons(id),foreign key (eid) references Contests(id));

create table uid(k int,incharge int,venue int,contest int,judge int,participant int);

insert into uid values(1,101,101,101,101,101);



