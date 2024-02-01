
namespace notify_svc;

public class Worker : BackgroundService
{
    private readonly ILogger<Worker> _logger;
    private IConfiguration _configuration;
    private Emailer _emailer;
    private Listener _listener;


    public Worker(ILogger<Worker> logger, IConfiguration configuration)
    {
        _logger = logger;
        _configuration = configuration;
        _emailer = new Emailer(configuration);
        _listener = new Listener(configuration);
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {

            try
            {
                _logger.LogInformation("listening for messages from: {Address}", _listener.Address);
                _listener.Listen(OnMessage);
            }
            catch (Exception exc)
            {
                _logger.LogError(exc, "Failed to send contact request.");
            }
        }
    }

    private Response OnMessage(Request request)
    {
        _emailer.SendEmail(request.Name, request.Email, request.Message);
        return new Response(true, "Thank you for contacting me. I look forward to speaking with you.");
    }
}
