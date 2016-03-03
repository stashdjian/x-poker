# x-poker: React/Redux planning  poker app.

##Overview:

X-Poker is a realtime application that allows teams to vote/measure task cards effort
with a planning poker voting process.

Users join a voting session via a public session URL. When a user enters a session's page, he first gets requested to enter a nickname to be identified by others on the session. Only after giving a nickname the user joins the session, is able to vote, and is visible for other users in the session. The user can choose to join the session as a member of a sub-team (development, qa, management, etc) to allow for the same session to be used to size cards by different sub-teams at the same time.

A voting session has a set of cards to vote for, and a set of voting values (fibonacci, modified fibonacci, etc).

##Tech Stack

The app is divided into a server and a client side.

Server side will be a Socket.io Server that will communicate actions to/from a Redux based planning poker API via listeners.

Client side will be a Redux/React application that will communicate actions to/from the server via Socket.io Client connection.
