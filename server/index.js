const express = require("express");
const app =  express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const db = mysql.createPool({
    host : "",
    user: "",
    password:"",
    database : "coms"
})
const cors = require("cors")

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/insert/incharge",(req,res) =>
{
    var id = req.query.id;
    var inchargeName = req.query.inchargeName;
    var address = req.query.address;
    var mobile = req.query.mobile;
    var uid = parseInt(req.query.uid) + 1;



    let sqlQuery = 'insert into Persons (id,name,mobileNo,address) values ("'+id+'","'+inchargeName+'","'+mobile+'","'+address+'");';

    db.query(sqlQuery ,(err,result) => {
        if(err)
        {
            console.log(err);
            res.send(err.sqlMessage);
        }
        else{
            console.log(result);
            res.send("Success");
            db.query('update uid set incharge = '+uid+';',(err,result) =>{});
            db.query('insert into Incharge (id) values("'+id+'");',(err,result) =>{});
        }
        
    });
    
});

app.get("/api/insert/judge",(req,res) =>
{
    var id = req.query.id;
    var judgeName = req.query.judgeName;
    var address = req.query.address;
    var mobile = req.query.mobile;
    var uid = parseInt(req.query.uid) + 1;



    let sqlQuery = 'insert into Persons (id,name,mobileNo,address) values ("'+id+'","'+judgeName+'","'+mobile+'","'+address+'");';

    db.query(sqlQuery ,(err,result) => {
        if(err)
        {
            console.log(err);
            res.send(err.sqlMessage);
        }
        else{
            console.log(result);
            res.send("Success");
            db.query('update uid set judge = '+uid+';',(err,result) =>{});
            db.query('insert into judge (JudgeID) values("'+id+'");',(err,result) =>{});
        }
        
    });
    
});


app.get("/api/insert/contest",(req,res) =>
{
    var inchargeID = req.query.inchargeID;
    var contestName = req.query.contestName;
    var contestID = req.query.contestID;
    var venueID = req.query.venueID;
    var date = req.query.date;
    var time = req.query.time;
    var uid = parseInt(req.query.uid) + 1;


    let sqlQuery = 'insert into Contests (id,contestName,inchargeId,venueId) values ("'+contestID+'","'+contestName+'","'+inchargeID+'","'+venueID+'");';

    db.query(sqlQuery ,(err,result) => {
        if(err)
        {
            console.log(err);
            res.send(err.sqlMessage);
        }
        else
        {
            db.query('insert into schedule (Contest,date,time) values ("'+contestID+'","'+date+'","'+time+'");',(err,result) =>{
                if(err)
                {
                    console.log(err);
                    res.send(err.sqlMessage);
                    
                    db.query('delete from Contests where id ="'+contestID+'";',(err,result) => {
                    if(err)
                    {
                        console.log(err);
                        res.send(err.sqlMessage);
                    }
                    else{
                        console.log(result);
                    }});
                    
                }
                else
                {
                    
                    console.log(result);
                    res.send("Success")
                    

                }})
                db.query('update uid set contest = '+uid+';',(err,result) =>{});  
        }
    })
});


app.get("/api/insert/venue",(req,res) =>
{
    var venueID = req.query.venueID;
    var venueName = req.query.venueName;
    var location = req.query.location;
    var uid = parseInt(req.query.uid) + 1;


    let sqlQuery = 'insert into Venue (id,venueName,location) values ("'+venueID+'","'+venueName+'","'+location+'");';

    db.query(sqlQuery ,(err,result) => {
        if(err)
        {
            console.log(err);
            res.send(err.sqlMessage);
        }
        else{
            console.log(result);
            db.query('update uid set venue = '+uid+';',(err,result) =>{});
            res.send("Success");
        }
        
    });
    
});

app.get("/api/insert/participant",(req,res) =>
{
    var id = req.query.id;
    var participantName = req.query.participantName;
    var address = req.query.address;
    var mobile = req.query.mobile;
    var uid = parseInt(req.query.uid) + 1;



    let sqlQuery = 'insert into Persons (id,name,mobileNo,address) values ("'+id+'","'+participantName+'","'+mobile+'","'+address+'");';

    db.query(sqlQuery ,(err,result) => {
        if(err)
        {
            console.log(err);
            res.send(err.sqlMessage);
        }
        else{
            console.log(result);
            db.query('update uid set participant = '+uid+';',(err,result) =>{});
            res.send("Sucess");
        }
        
    });    
});

app.get("/api/retrieve/PartList",(req,res) =>
{
    db.query("Select * from Persons  where id in (Select pid from ParticipantsEvents);",(err,result) => {
        if(err)
        {
            console.log(err);
            res.send(err.sqlMessage);
        }
        else{
            //console.log(result);
            res.send(result);
        }
    })
})

app.get("/api/retrieve/Scoring_events",(req,res) =>
{
    db.query("Select id,contestName from Contests ;",(err,result) => {
        if(err)
        {
            console.log(err);
            res.send(err.sqlMessage);
        }
        else{
            //console.log(result);
            res.send(result);
        }
    })
})

app.get("/api/retrieve/Scoring_particpants",(req,res) =>
{
    var conId = req.query.conId;
    db.query('select pid from ParticipantsEvents where eid = "' +conId+'" and score is NULL;',(err,result) => {
        if(err)
        {
            console.log(err);
            res.send(err.sqlMessage);
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})

app.get("/api/retrieve/updateScore",(req,res) =>
{
    var score = req.query.score;
    var pid = req.query.pid;
    var conID = req.query.conID;

    db.query('update ParticipantsEvents set score = '+score+' where (pid = "'+pid+'" and eid ="'+ conID+'");',(err,result) => {
        if(err)
        {
            console.log(err);
            res.send(err.sqlMessage);
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})

app.get("/api/retrieve/resPerEve",(req,res) =>
{
    var eid = req.query.id

    db.query('insert into Results(select pid,eid,@row_number:=@row_number+1 from ParticipantsEvents, (select @row_number:= 0) as t where eid="'+eid+'" order by score desc limit 3);',(err,result) => {
        if(err)
        {
            console.log(err);
            res.send(err.sqlMessage);
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})

app.get("/api/retrieve/view",(req,res) =>
{
    var eid = req.query.id
    db.query('select pid,pos from Results where eid="'+eid+'" order by pos;',(err,result) => {
        if(err)
        {
            console.log(err);
            res.send(err.sqlMessage);
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})

app.get("/api/retrieve/getName",(req,res) =>
{
    var pid = req.query.id
    db.query('select name from Persons where id="'+pid+'";',(err,result) => {
        if(err)
        {
            console.log(err);
            res.send(err.sqlMessage);
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})

app.get("/api/retrieve/schedule",(req,res) =>
{
    db.query('select Contests.contestName,Contests.venueID,schedule.date,schedule.time from Contests,schedule where(Contests.id = schedule.Contest);',(err,result) => {
        if(err)
        {
            console.log(err);
            res.send(err.sqlMessage);
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})

app.get("/api/retrieve/getVenue",(req,res) =>
{
    var id = req.query.id;
    db.query('select venueName,location from Venue where id = "'+id+'";',(err,result) => {
        if(err)
        {
            console.log(err);
            res.send(err.sqlMessage);
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})


app.get("/api/insert/pping",(req,res) =>
{
    var id = req.query.id;
    var con = req.query.con;



    let sqlQuery = 'insert into ParticipantsEvents(pid,eid,score) values ("'+id+'","'+con+'",null);';

    db.query(sqlQuery ,(err,result) => {
        if(err)
        {
            console.log(err);
            res.send(err.sqlMessage);
        }
        else{
            console.log(id);
            console.log(con)
            res.send("Success");
        }
        
    });
    
});

app.get("/api/retrieve/indiScore",(req,res) =>
{
    var pid = req.query.pid
    var cid = req.query.cid
    db.query('select score from ParticipantsEvents where eid="'+cid+'" and pid ="'+pid+'"',(err,result) => {
        if(err)
        {
            console.log(err);
            res.send(err.sqlMessage);
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})

app.get("/api/retrieve/id",(req,res) =>
{
    var dash = req.query.dash
    db.query('select '+dash+' from uid',(err,result) => {
        if(err)
        {
            console.log(err);
            res.send(err.sqlMessage);
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})

app.listen(5000, () =>
{
    console.log("Success")
});