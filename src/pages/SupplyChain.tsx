import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Package, TrendingUp, Truck, AlertTriangle, CheckCircle, Clock, Star, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import { inventoryItems, vendors, orders, getStockPercentage, getStockStatus } from '@/data/supplyChainData';
import { getNextFestival } from '@/data/festivalData';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const SupplyChain = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const nextFestival = getNextFestival();
  const isFestivalSeason = nextFestival.daysUntil <= 14;

  // Filter inventory by category
  const filteredInventory = selectedCategory === 'all' 
    ? inventoryItems 
    : inventoryItems.filter(item => item.category === selectedCategory);

  // Calculate statistics
  const totalItems = inventoryItems.length;
  const criticalItems = inventoryItems.filter(item => {
    const percentage = getStockPercentage(item, isFestivalSeason);
    return getStockStatus(percentage) === 'critical';
  }).length;
  
  const lowItems = inventoryItems.filter(item => {
    const percentage = getStockPercentage(item, isFestivalSeason);
    return getStockStatus(percentage) === 'low';
  }).length;

  const festivalCriticalItems = inventoryItems.filter(item => item.isFestivalCritical).length;

  const totalBudget = 2000000;
  const spentBudget = orders.reduce((sum, order) => sum + order.totalCost, 0);

  // Category distribution data
  const categoryData = [
    { name: 'Diabetes', value: inventoryItems.filter(i => i.category === 'diabetes').length, color: 'hsl(var(--destructive))' },
    { name: 'Cardiac', value: inventoryItems.filter(i => i.category === 'cardiac').length, color: 'hsl(var(--primary))' },
    { name: 'Burn', value: inventoryItems.filter(i => i.category === 'burn').length, color: 'hsl(280 70% 60%)' },
    { name: 'Respiratory', value: inventoryItems.filter(i => i.category === 'respiratory').length, color: 'hsl(var(--secondary))' },
    { name: 'General', value: inventoryItems.filter(i => i.category === 'general').length, color: 'hsl(var(--accent))' }
  ];

  // Stock level data for chart
  const stockLevelData = inventoryItems.slice(0, 8).map(item => ({
    name: item.name.split(' ')[0],
    current: item.currentStock,
    normal: item.normalThreshold,
    festival: item.festivalThreshold
  }));

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe': return 'bg-accent';
      case 'low': return 'bg-yellow-500';
      case 'critical': return 'bg-destructive';
      default: return 'bg-muted';
    }
  };

  const getOrderStatusBadge = (status: string) => {
    switch (status) {
      case 'delivered': return <Badge className="bg-accent">Delivered</Badge>;
      case 'in-transit': return <Badge className="bg-secondary">In Transit</Badge>;
      case 'pending': return <Badge variant="outline">Pending</Badge>;
      case 'delayed': return <Badge variant="destructive">Delayed</Badge>;
      default: return <Badge>Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-20">
        {/* Header */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Package className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Supply Chain Management</h1>
                <p className="text-muted-foreground">Festival-aware inventory & vendor coordination</p>
              </div>
            </div>
            
            {isFestivalSeason && (
              <Card className="p-4 bg-festival/10 border-festival/30">
                <p className="text-sm font-semibold text-festival flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Festival Mode Active
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {nextFestival.name} in {nextFestival.daysUntil} days
                </p>
              </Card>
            )}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Package className="h-4 w-4 text-primary" />
                <p className="text-sm text-muted-foreground">Total Items</p>
              </div>
              <p className="text-3xl font-bold">{totalItems}</p>
            </Card>

            <Card className="p-4 bg-destructive/10 border-destructive/20">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <p className="text-sm text-muted-foreground">Critical</p>
              </div>
              <p className="text-3xl font-bold text-destructive">{criticalItems}</p>
            </Card>

            <Card className="p-4 bg-yellow-500/10 border-yellow-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-yellow-600" />
                <p className="text-sm text-muted-foreground">Low Stock</p>
              </div>
              <p className="text-3xl font-bold text-yellow-600">{lowItems}</p>
            </Card>

            <Card className="p-4 bg-festival/10 border-festival/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-festival" />
                <p className="text-sm text-muted-foreground">Festival Critical</p>
              </div>
              <p className="text-3xl font-bold text-festival">{festivalCriticalItems}</p>
            </Card>

            <Card className="p-4 bg-accent/10 border-accent/20">
              <div className="flex items-center gap-2 mb-2">
                <Truck className="h-4 w-4 text-accent" />
                <p className="text-sm text-muted-foreground">Active Orders</p>
              </div>
              <p className="text-3xl font-bold text-accent">{orders.length}</p>
            </Card>
          </div>
        </section>

        {/* Budget Overview */}
        <section className="mb-12">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Festival Budget Utilization</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Budget Used: ₹{(spentBudget / 100000).toFixed(2)} Lakhs / ₹{totalBudget / 100000} Lakhs</span>
                <span className="font-semibold">{((spentBudget / totalBudget) * 100).toFixed(1)}%</span>
              </div>
              <Progress value={(spentBudget / totalBudget) * 100} className="h-3" />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Remaining: ₹{((totalBudget - spentBudget) / 100000).toFixed(2)} Lakhs available for additional orders
            </p>
          </Card>
        </section>

        {/* Inventory Analysis Charts */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Stock Levels vs Thresholds</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={stockLevelData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="current" fill="hsl(var(--primary))" name="Current Stock" />
                  <Bar dataKey="normal" fill="hsl(var(--muted-foreground))" name="Normal Threshold" />
                  <Bar dataKey="festival" fill="hsl(var(--festival))" name="Festival Threshold" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Inventory by Category</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => `${entry.name}: ${entry.value}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </section>

        {/* Inventory Table */}
        <section className="mb-12">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Festival-Aware Inventory</h2>
              
              <div className="flex gap-2">
                <Button 
                  variant={selectedCategory === 'all' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setSelectedCategory('all')}
                >
                  All
                </Button>
                <Button 
                  variant={selectedCategory === 'diabetes' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setSelectedCategory('diabetes')}
                >
                  Diabetes
                </Button>
                <Button 
                  variant={selectedCategory === 'cardiac' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setSelectedCategory('cardiac')}
                >
                  Cardiac
                </Button>
                <Button 
                  variant={selectedCategory === 'burn' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setSelectedCategory('burn')}
                >
                  Burn
                </Button>
                <Button 
                  variant={selectedCategory === 'respiratory' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setSelectedCategory('respiratory')}
                >
                  Respiratory
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {filteredInventory.map((item) => {
                const percentage = getStockPercentage(item, isFestivalSeason);
                const status = getStockStatus(percentage);
                const threshold = isFestivalSeason ? item.festivalThreshold : item.normalThreshold;

                return (
                  <Card key={item.id} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-lg ${getStatusColor(status)} flex items-center justify-center`}>
                          <Package className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold">{item.name}</h3>
                            {item.isFestivalCritical && (
                              <Badge variant="outline" className="text-xs border-festival text-festival">
                                Festival Critical
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground capitalize">{item.category}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-2xl font-bold">
                          {item.currentStock} <span className="text-sm font-normal text-muted-foreground">{item.unit}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Threshold: {threshold} {item.unit}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {isFestivalSeason ? 'Festival' : 'Normal'} Stock Level
                        </span>
                        <span className={`font-semibold ${
                          status === 'safe' ? 'text-accent' : 
                          status === 'low' ? 'text-yellow-600' : 
                          'text-destructive'
                        }`}>
                          {percentage.toFixed(0)}%
                        </span>
                      </div>
                      <Progress value={percentage} className="h-2" />
                    </div>

                    <div className="mt-3 flex items-center justify-between text-sm">
                      <div className="flex gap-4">
                        <span className="text-muted-foreground">Cost: ₹{item.cost}/{item.unit}</span>
                        {item.expiryDays && (
                          <span className={`${item.expiryDays < 60 ? 'text-destructive' : 'text-muted-foreground'}`}>
                            Expiry: {item.expiryDays} days
                          </span>
                        )}
                      </div>

                      {status === 'critical' && (
                        <Badge variant="destructive" className="gap-1">
                          <AlertTriangle className="h-3 w-3" />
                          Reorder Now
                        </Badge>
                      )}
                      {status === 'low' && (
                        <Badge className="bg-yellow-500 gap-1">
                          <Clock className="h-3 w-3" />
                          Order Soon
                        </Badge>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          </Card>
        </section>

        {/* Vendor Management */}
        <section className="mb-12">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Truck className="h-5 w-5 text-secondary" />
              <h2 className="text-2xl font-bold">Vendor Management</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {vendors.map((vendor) => (
                <Card key={vendor.id} className="p-4 bg-muted/50">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-lg">{vendor.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                          <span className="text-sm font-semibold">{vendor.rating}</span>
                        </div>
                        {vendor.festivalExpress && (
                          <Badge variant="outline" className="text-xs border-festival text-festival">
                            Festival Express
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="gap-2">
                      <Phone className="h-4 w-4" />
                      Contact
                    </Button>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Avg Delivery:</span>
                      <span className="font-semibold">{vendor.avgDeliveryDays} days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Festival Pricing:</span>
                      <span className="font-semibold">+{vendor.festivalPricing}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Contact:</span>
                      <span className="font-semibold">{vendor.contact}</span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="text-xs text-muted-foreground mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {vendor.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </section>

        {/* Order Tracking */}
        <section>
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-bold">Delivery Tracking</h2>
            </div>

            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold">{order.itemName}</h3>
                        {order.isFestivalOrder && (
                          <Badge variant="outline" className="text-xs border-festival text-festival">
                            Festival Order
                          </Badge>
                        )}
                        {getOrderStatusBadge(order.status)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Order #{order.id} • Vendor: {order.vendor}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xl font-bold">₹{(order.totalCost / 1000).toFixed(1)}K</p>
                      <p className="text-sm text-muted-foreground">{order.quantity} units</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex gap-6">
                      <div>
                        <span className="text-muted-foreground">Order Date: </span>
                        <span className="font-semibold">{order.orderDate.toLocaleDateString('en-IN')}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Expected: </span>
                        <span className="font-semibold">{order.expectedDelivery.toLocaleDateString('en-IN')}</span>
                      </div>
                    </div>

                    {order.status === 'in-transit' && (
                      <Badge className="bg-secondary gap-1">
                        <Truck className="h-3 w-3" />
                        In Transit
                      </Badge>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold text-accent">{orders.filter(o => o.status === 'delivered').length}</p>
                <p className="text-sm text-muted-foreground">Delivered</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold text-secondary">{orders.filter(o => o.status === 'in-transit').length}</p>
                <p className="text-sm text-muted-foreground">In Transit</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold text-muted-foreground">{orders.filter(o => o.status === 'pending').length}</p>
                <p className="text-sm text-muted-foreground">Pending</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold text-destructive">{orders.filter(o => o.status === 'delayed').length}</p>
                <p className="text-sm text-muted-foreground">Delayed</p>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <Chatbot />
    </div>
  );
};

export default SupplyChain;
