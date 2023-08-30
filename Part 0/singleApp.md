```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server


    user->>browser: Enter link into the browser 

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser:  JS code is returned
    deactivate server

    browser->>browser: JS fetches notes from json data and html elements for display

    
```