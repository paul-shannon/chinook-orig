library(ChinookServer)
library(RUnit)
SERVER_PORT=18018
datasets <- "DEMOdz"
analysisPackages <- NA_character_
browserFile <- "index.html"
userCredentials <- "test@nowhere.net"
chinook <- ChinookServer(port=SERVER_PORT, analysisPackages, datasets, browserFile, userCredentials)

if(Sys.info()[["nodename"]] != "eager.systemsbiology.net")
   browseURL(sprintf("http://localhost:%d", SERVER_PORT))

run(chinook)
