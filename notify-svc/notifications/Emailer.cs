using System.Net.Mail;

namespace notify_svc;

public class Emailer
{
    private SmtpClient _smtpClient;
    private string _emailFrom;
    private string _emailTo;
    public Emailer(IConfiguration configuration)
    {
        var msgingConfig = configuration.GetSection("Msging");
        var password = msgingConfig["password"] ?? "";
        _emailFrom = msgingConfig["emailFrom"] ?? "";
        _emailTo = msgingConfig["emailTo"] ?? "";

        _smtpClient = new SmtpClient
        {
            Host = "smtp.gmail.com",
            Port = 587,
            DeliveryMethod = SmtpDeliveryMethod.Network,
            UseDefaultCredentials = false,
            EnableSsl = true,
            Credentials = new System.Net.NetworkCredential(_emailFrom, password)
        };
    }

    public void SendEmail(string name, string from, string Message)
    {
        var mailMessage = new MailMessage
        {
            From = new MailAddress(_emailFrom),
            Subject = string.Format("Contact Request from {0} {1}", name, from),
            Body = Message,
        };
        mailMessage.To.Add(new MailAddress(_emailTo));
        _smtpClient.Send(mailMessage);
    }

}