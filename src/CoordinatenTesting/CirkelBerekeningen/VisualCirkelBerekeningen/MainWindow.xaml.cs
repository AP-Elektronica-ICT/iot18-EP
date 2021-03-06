﻿using System;
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

namespace VisualCirkelBerekeningen
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void btnCalculate_Click(object sender, RoutedEventArgs e)
        {
            double X1 = Convert.ToDouble(txtX1.Text);
            double Y1 = Convert.ToDouble(txtY1.Text);
            double r1 = Convert.ToDouble(txtr1.Text);

            double X2 = Convert.ToDouble(txtX2.Text);
            double Y2 = Convert.ToDouble(txtY2.Text);
            double r2 = Convert.ToDouble(txtr2.Text);

            double X3 = Convert.ToDouble(txtX3.Text);
            double Y3 = Convert.ToDouble(txtY3.Text);
            double r3 = Convert.ToDouble(txtr3.Text);

            double X4 = Convert.ToDouble(txtX4.Text);
            double Y4 = Convert.ToDouble(txtY4.Text);
            double r4 = Convert.ToDouble(txtr4.Text);

            List<M> ms = new List<M>
            {
                calculateThreeCircleIntersection(X2, Y2, r2, X3, Y3, r3, X4, Y4, r4),
                calculateThreeCircleIntersection(X1, Y1, r1, X2, Y2, r2, X3, Y3, r3)
            };

            MessageBox.Show(ms[0].XPos.ToString());
            MessageBox.Show(ms[0].YPos.ToString());
            int xPos = (ms[0].XPos + ms[1].XPos) / 2;
            int yPos = (ms[0].YPos + ms[1].YPos) / 2;

            MessageBox.Show("Xpos: " + xPos + "YPos: " + yPos);

            Ellipse el = new Ellipse
            {
               Width = 20,
               Height = 20
            };
            el.SetValue(Canvas.LeftProperty, ms[1].XPos - el.Width / 2.0);
            el.SetValue(Canvas.TopProperty, ms[1].YPos - el.Height / 2.0);

            el.Stroke = Brushes.Red;
            el.StrokeThickness = 1;

            cnvGrid.Children.Add(el);
        }

        private M calculateThreeCircleIntersection(double x0, double y0, double r0,
                                                 double x1, double y1, double r1,
                                                 double x2, double y2, double r2)
        {
            double EPSILON = 2000;

            double a, dx, dy, d, h, rx, ry;
            double point2_x, point2_y;

            /* dx and dy are the vertical and horizontal distances between
            * the circle centers.
            */
            dx = x1 - x0;
            dy = y1 - y0;

            /* Determine the straight-line distance between the centers. */
            d = Math.Sqrt(((dy * dy) + (dx * dx)));

            /* Check for solvability. */
            if (d > (r0 + r1))
            {
                /* no solution. circles do not intersect. */
                return new M { XPos = 1, YPos = 1 };
            }
            if (d < Math.Abs(r0 - r1))
            {
                /* no solution. one circle is contained in the other */
                return new M { XPos = 2, YPos = 2 };
            }

            /* 'point 2' is the point where the line through the circle
            * intersection points crosses the line between the circle
            * centers.
            */

            /* Determine the distance from point 0 to point 2. */
            a = ((r0 * r0) - (r1 * r1) + (d * d)) / (2.0 * d);

            /* Determine the coordinates of point 2. */
            point2_x = x0 + (dx * a / d);
            point2_y = y0 + (dy * a / d);

            /* Determine the distance from point 2 to either of the
            * intersection points.
            */
            h = Math.Sqrt((r0 * r0) - (a * a));

            /* Now determine the offsets of the intersection points from
            * point 2.
            */
            rx = -dy * (h / d);
            ry = dx * (h / d);

            /* Determine the absolute intersection points. */
            double intersectionPoint1_x = point2_x + rx;
            double intersectionPoint2_x = point2_x - rx;
            double intersectionPoint1_y = point2_y + ry;
            double intersectionPoint2_y = point2_y - ry;

            //MessageBox.Show("INTERSECTION Circle1 AND Circle2: (" + intersectionPoint1_x + ":" + intersectionPoint1_y + ")" + " AND (" + intersectionPoint2_x + ":" + intersectionPoint2_y + ")");

            /* Lets determine if circle 3 intersects at either of the above intersection points. */
            double dx2 = intersectionPoint1_x - x2;
            double dy2 = intersectionPoint1_y - y2;
            double d3a = Math.Sqrt((dy2 * dy2) + (dx2 * dx2));

            dx2 = intersectionPoint2_x - x2;
            dy2 = intersectionPoint2_y - y2;
            double d3b = Math.Sqrt((dy2 * dy2) + (dx2 * dx2));

            if (Math.Abs(d3a - r2) < EPSILON)
            {
                return new M { XPos = (int)Math.Round(intersectionPoint1_x), YPos = (int)Math.Round(intersectionPoint1_y) };
            }
            else if (Math.Abs(d3b - r2) < EPSILON)
            {
                return new M { XPos = (int)Math.Round(intersectionPoint2_x), YPos = (int)Math.Round(intersectionPoint2_y) };
            }
            return new M { XPos = 3, YPos = 3 };
        }

        private void btnDraw_Click(object sender, RoutedEventArgs e)
        {
            cnvGrid.Children.Clear();

            double X1 = Convert.ToDouble(txtX1.Text);
            double Y1 = Convert.ToDouble(txtY1.Text);
            double r1 = Convert.ToDouble(txtr1.Text);

            Ellipse el = new Ellipse();
            el.Width = r1*2;
            el.Height = r1*2;
            el.SetValue(Canvas.LeftProperty, X1 - el.Width / 2.0);
            el.SetValue(Canvas.TopProperty, Y1 - el.Height / 2.0);

            el.Stroke = Brushes.Black;
            el.StrokeThickness = 1;

            cnvGrid.Children.Add(el);

            double X2 = Convert.ToDouble(txtX2.Text);
            double Y2 = Convert.ToDouble(txtY2.Text);
            double r2 = Convert.ToDouble(txtr2.Text);

            el = new Ellipse();
            el.Width = r2 * 2;
            el.Height = r2 * 2;
            el.SetValue(Canvas.LeftProperty, X2 - el.Width / 2.0);
            el.SetValue(Canvas.TopProperty, Y2 - el.Height / 2.0);

            el.Stroke = Brushes.Black;
            el.StrokeThickness = 1;

            cnvGrid.Children.Add(el);

            double X3 = Convert.ToDouble(txtX3.Text);
            double Y3 = Convert.ToDouble(txtY3.Text);
            double r3 = Convert.ToDouble(txtr3.Text);

            el = new Ellipse();
            el.Width = r3 * 2;
            el.Height = r3 * 2;
            el.SetValue(Canvas.LeftProperty, X3 - el.Width / 2.0);
            el.SetValue(Canvas.TopProperty, Y3 - el.Height / 2.0);

            el.Stroke = Brushes.Black;
            el.StrokeThickness = 1;

            cnvGrid.Children.Add(el);

            double X4 = Convert.ToDouble(txtX4.Text);
            double Y4 = Convert.ToDouble(txtY4.Text);
            double r4 = Convert.ToDouble(txtr4.Text);

            el = new Ellipse();
            el.Width = r4 * 2;
            el.Height = r4 * 2;
            el.SetValue(Canvas.LeftProperty, X4 - el.Width / 2.0);
            el.SetValue(Canvas.TopProperty, Y4 - el.Height / 2.0);

            el.Stroke = Brushes.Black;
            el.StrokeThickness = 1;

            cnvGrid.Children.Add(el);

        }
    } 

    public class M
    {
        public int XPos { get; set; }
        public int YPos { get; set; }
    }


}
