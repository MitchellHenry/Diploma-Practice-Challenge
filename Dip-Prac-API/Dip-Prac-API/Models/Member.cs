using System;
using System.Collections.Generic;

#nullable disable

namespace Dip_Prac_API.Models
{
    public partial class Member
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string Status { get; set; }
    }
}
