namespace notify_svc;

public class Request {

    public string Name { get; set; }
    public string Email { get; set; }
    public string Message { get; set; }
    public Request(string name, string email,string message) {
        Name = name;
        Email = email;
        Message = message;
    }
}