# About
This is a small chat app which uses socket.io for sending and receiving messages. The project also includes server implemention.
# How it works
When the app is opened in browser it tries to establish connection to backend via socket.io libarary. Current implementation requires the same hostname for both front-end and backend parts
# Steps to launch
`npm i`\
`npm run start`. Navigate to `http://localhost:8080/`

Then open second terminal

`npm run server:start`
# Checkbox list
[+] small socket.io server
[+] chat message box to list messages\
[+] the user’s messages is on the right and the other user’s messages is on the left\
[+] each message should display the time it was sent\
[+] input field where I can type and send messages\
[+] users can send pictures via URL. When sent, this URL is rendered on themessage box as an image. URL should ends with .jpg|.jpeg|.png|.gif\
[+] next to the input field it is expected a button to send the message\
[+] all the settings are consumed and saved on the LocalStorage\
[+] change username input field\
[+] change clock display radio inputs\
[+-] send messages with Ctrl + ENTER toggle. Command + ENTER is not supported\
[+] have a text/link to reset all the settings back to its defaults\
## Additional improvements
[+] when app disconected an appropriate modal message appears
