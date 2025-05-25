namespace notify_svc;

using System.Text.Json;
using NetMQ;
using NetMQ.Sockets;

public delegate Response OnMessage(Request request);

public class Listener
{
    public string Address { get; set; }

    public Listener(IConfiguration configuration)
    {
        var msgingConfig = configuration.GetSection("Msging");
        Address = msgingConfig["Addr"] ?? "";
    }
    public void Listen(OnMessage onMessage)
    {
        using (var server = new ResponseSocket(Address))
        {
            while (true)
            {
                string raw = server.ReceiveFrameString();

                var request = JsonSerializer.Deserialize<Request>(raw);

                if (request != null)
                {
                    var response = onMessage(request);
                    server.SendFrame(JsonSerializer.Serialize<Response>(response, new JsonSerializerOptions
                    {
                        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                    }));
                }
            }
        }
    }
}
