using Microsoft.AspNetCore.Mvc;
using Database.Data;
using Database.Models;

namespace journal_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class JournalController : ControllerBase
    {

        JournalContext context = new JournalContext();
        private readonly ILogger<JournalController> _logger;

        public JournalController(ILogger<JournalController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("/GetAllMessages")]
        public ActionResult GetAllMessages()
        {
            return Ok(context.Content);
        }

        [HttpPost]
        [Route("/InsertMessage")]
        public ActionResult InsertMessage(Paramaters paramater)
        {
            
            context.Content.Add(new Content()
            {
                Message = paramater.Content
            });

            context.SaveChanges();
            
            return Ok();
        }
    }

    public class Paramaters
    {
        public string Content { get; set; }
    }
}