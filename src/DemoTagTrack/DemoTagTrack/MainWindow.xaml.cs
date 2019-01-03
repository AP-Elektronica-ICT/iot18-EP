using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using RestSharp;
using DataFormat = RestSharp.DataFormat;

namespace DemoTagTrack
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
        }

        private void CnvMap_MouseDown(object sender, MouseButtonEventArgs e)
        {
            Point p = e.GetPosition(cnvMap);
            double x = p.X;
            double y = p.Y;
            //Console.WriteLine(x.ToString()+","+ y.ToString());
            double x1 = Math.Sqrt(Math.Pow(x - 0, 2) + Math.Pow(y - 0, 2));
            double x2 = Math.Sqrt(Math.Pow(x - 300, 2) + Math.Pow(y - 0, 2));
            double x3 = Math.Sqrt(Math.Pow(x - 300, 2) + Math.Pow(y - 300, 2));
            double x4 = Math.Sqrt(Math.Pow(x - 0, 2) + Math.Pow(y - 300, 2));
            Console.WriteLine(Math.Floor(x1).ToString()+","+ Math.Floor(x2).ToString()+","+ Math.Floor(x3).ToString()+","+ Math.Floor(x4).ToString());

            var client = new RestClient("http://192.168.3.1/");
            var request = new RestRequest(Method.POST);
            request.RequestFormat = DataFormat.Json;
            request.AddJsonBody(new { MAC_TAG = "TAG111",MAC_ANCHOR = "ANCHOR111", DISTANCE = Math.Floor(x1)});
            client.Execute(request);
            request = new RestRequest(Method.POST);
            request.RequestFormat = DataFormat.Json;
            request.AddJsonBody(new { MAC_TAG = "TAG111", MAC_ANCHOR = "ANCHOR112", DISTANCE = Math.Floor(x2) });
            client.Execute(request);
            request = new RestRequest(Method.POST);
            request.RequestFormat = DataFormat.Json;
            request.AddJsonBody(new { MAC_TAG = "TAG111", MAC_ANCHOR = "ANCHOR113", DISTANCE = Math.Floor(x3) });
            client.Execute(request);
            request = new RestRequest(Method.POST); 
            request.RequestFormat = DataFormat.Json;
            request.AddJsonBody(new { MAC_TAG = "TAG111", MAC_ANCHOR = "ANCHOR114", DISTANCE = Math.Floor(x4) });
            client.Execute(request);
        }

        internal class Response
        {
            public string timeStamp { get; set; }
        }
    }
}