app.get("/api/user", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });

  app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });

  app.post("/api/user", function(req, res) {
    var newUser = req.body;
    newUser.routeName = newUser.name.replace(/\s+/g, "").toLowerCase();
    console.log(newUser);
    users.push(newUser);
    res.json(newUser);
  });