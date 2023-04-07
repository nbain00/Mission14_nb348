using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission14_nb348.Data;

namespace Mission14_nb348.Controllers
{
    [Route("[controller]")]
    [ApiController]
    // Controller for the API
    public class MovieController : Controller
    {
        private MovieDbContext dbContext;
        public MovieController(MovieDbContext temp)
        {
            dbContext = temp;
        }

        public IEnumerable<Movie> Get() 
        {
            // Here's my data query. I wasn't sure with the requirements...
            // So I have the API only send the edited movies
            var x = dbContext.Movies
                .Where(x => x.Edited == "Yes")
                .OrderBy(x => x.Title)
                .ToArray();

            return x;
        }
    }
}
