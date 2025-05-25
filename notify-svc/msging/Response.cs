namespace notify_svc;

public class Response
{

    public bool Success { get; set; }
    public string Result { get; set; }
    public Response(bool success, string result)
    {
        Success = success;
        Result = result;
    }
}