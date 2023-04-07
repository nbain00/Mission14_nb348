using Microsoft.EntityFrameworkCore;

namespace Mission14_nb348.Data
{
    public class MovieDbContext : DbContext
    {
        // Constructor for this class
        public MovieDbContext (DbContextOptions<MovieDbContext> options) : base(options) { }

        // Here's the declaration of the table
        public DbSet<Movie>? Movies { get; set; }
    }
}
