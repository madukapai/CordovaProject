using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(MobileNotificationAppService.Startup))]

namespace MobileNotificationAppService
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureMobileApp(app);
        }
    }
}