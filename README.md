Collaborative Listening With Spotify 

![img](public/listen.png)



Convert your clientid and clientsecret to ase 64


```bash 
curl -H "Authorization: Basic $clientid:clientsecret" -d  grant_type=authorizati
on_code -d code=${code} https://api.spotify.com/v1/me```


