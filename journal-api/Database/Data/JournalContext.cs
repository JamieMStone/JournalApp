using Database.Models;
using Microsoft.EntityFrameworkCore;

namespace Database.Data
{
    public class JournalContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Content> Content { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
                @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=Journal;Integrated Security=True;");
        }
    }
}
