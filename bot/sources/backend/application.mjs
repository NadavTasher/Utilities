/**
 * Copyright (c) 2020 Nadav Tasher
 * https://github.com/NadavTasher/Template/
 **/

// Import internal parts
import { Server } from "./internal/server/server.mjs";

// Create the server
let mServer = new Server(8000);

// Import the routes
import base from "./external/base.mjs";
import bot from "./external/bot.mjs";

// Enable the routes
mServer.insert("base", base);
mServer.insert("bot", bot);

// Listen for requests
mServer.listen();