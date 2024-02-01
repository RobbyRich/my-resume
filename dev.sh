docker stop notify-svc gateway-svc history-svc

tmux split-window 'cd notify-svc;echo notify-svc;dotnet publish -c Release -o out;cd out;dotnet notify-svc.dll'
tmux split-window 'cd history-svc;echo history-svc;go build;DB_CONNECTION="mongodb://localhost:27017/" ./history-svc'
tmux split-window 'cd gateway-svc;echo gateway-svc;npm run dev'