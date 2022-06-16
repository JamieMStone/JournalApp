using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Database.Models
{
    public class Content
    {
        [Key]
        public int ContentId { get; set; }
        public string Message { get; set; }
    }
}
