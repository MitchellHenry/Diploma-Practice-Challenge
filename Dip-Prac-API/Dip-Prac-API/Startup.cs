using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Dip_Prac_API.Models;
using Microsoft.EntityFrameworkCore;

namespace Dip_Prac_API
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<DipPracChallengeContext>(opt => opt.UseSqlServer("Server=tcp:dip-prac-challenge.database.windows.net,1433;Database=Dip-Prac-Challenge;User ID=Mitch;Password=GemmaH13;Trusted_Connection=False;Encrypt=False;"));
            services.AddControllers();
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(configure =>
                {
                    configure.AllowAnyOrigin();
                    configure.AllowAnyMethod();
                    configure.AllowAnyHeader();
                });
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseCors();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
