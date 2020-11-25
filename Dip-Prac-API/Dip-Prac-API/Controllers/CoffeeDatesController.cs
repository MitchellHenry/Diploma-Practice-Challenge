using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Dip_Prac_API.Models;

namespace Dip_Prac_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoffeeDatesController : ControllerBase
    {
        private readonly DipPracChallengeContext _context;

        public CoffeeDatesController(DipPracChallengeContext context)
        {
            _context = context;
        }

        // GET: api/CoffeeDates
        [HttpGet, Route("GetFutureBookings")]
        public async Task<IActionResult> GetFutureCoffeeDates()
        {
            //TimeZoneInfo AEDT = TimeZoneInfo.FindSystemTimeZoneById("AUS Eastern Standard Time");
            //DateTime Time = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, AEDT);
            var bookings = await _context.CoffeeDates.Where(c => c.Date > DateTime.Now).ToListAsync();
            return Ok(bookings);// await _context.CoffeeDates.FromSqlRaw("Select * from CoffeeDates where [date] > GETDATE() or [date] = GETDATE() and [time] > " + Int32.Parse((Time.ToString("HHmm")))).ToListAsync();
        }

        // GET: api/CoffeeDates
        [HttpGet, Route("PastBookings")]
        public async Task<IActionResult> GetPastCoffeeDates()
        {
            //TimeZoneInfo AEDT = TimeZoneInfo.FindSystemTimeZoneById("AUS Eastern Standard Time");
            //DateTime Time = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, AEDT);
            var bookings = await _context.CoffeeDates.Where(c => c.Date < DateTime.Now).ToListAsync();
            return Ok(bookings);// await _context.CoffeeDates.FromSqlRaw("Select * from CoffeeDates where [date] > GETDATE() or [date] = GETDATE() and [time] > " + Int32.Parse((Time.ToString("HHmm")))).ToListAsync();
        }

        // GET: api/CoffeeDates/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CoffeeDate>> GetCoffeeDate(int id)
        {
            var coffeeDate = await _context.CoffeeDates.FindAsync(id);

            if (coffeeDate == null)
            {
                return NotFound();
            }

            return coffeeDate;
        }

        // PUT: api/CoffeeDates/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCoffeeDate(int id, CoffeeDate coffeeDate)
        {
            if (id != coffeeDate.Id)
            {
                return BadRequest();
            }

            _context.Entry(coffeeDate).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CoffeeDateExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CoffeeDates
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost, Route("PostBooking")]
        public async Task<ActionResult<CoffeeDate>> PostCoffeeDate(CoffeeDate coffeeDate)
        {
            _context.CoffeeDates.Add(coffeeDate);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCoffeeDate", new { id = coffeeDate.Id }, coffeeDate);
        }

        [HttpPost, Route("login")]
        public async Task<IActionResult> Login(Login login)
        {
            var member = await _context.Members.Where(m => m.Email == login.email && m.Password == login.password && m.Status == "authorized").FirstOrDefaultAsync();
            if(member != null)
            {
                return Ok(member);
            }
            else
            {
                return NotFound();
            }
        }

        // DELETE: api/CoffeeDates/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CoffeeDate>> DeleteCoffeeDate(int id)
        {
            var coffeeDate = await _context.CoffeeDates.FindAsync(id);
            if (coffeeDate == null)
            {
                return NotFound();
            }

            _context.CoffeeDates.Remove(coffeeDate);
            await _context.SaveChangesAsync();

            return coffeeDate;
        }

        private bool CoffeeDateExists(int id)
        {
            return _context.CoffeeDates.Any(e => e.Id == id);
        }
    }
}
