using System;
using System.Collections.Generic;

#nullable disable

namespace Dip_Prac_API.Models
{
    public partial class CoffeeDate
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Venue { get; set; }
        public decimal? Cost { get; set; }
        public string Shouter { get; set; }
        public string Booker { get; set; }
    }
}
