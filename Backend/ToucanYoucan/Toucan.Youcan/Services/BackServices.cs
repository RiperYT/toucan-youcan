namespace Toucan.Youcan.Services
{
    public class BackServices : IHostedService
    {
        public Task StartAsync(CancellationToken cancellationToken)
        {
            while (true)
            {
                Console.WriteLine("Back");
            }
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
