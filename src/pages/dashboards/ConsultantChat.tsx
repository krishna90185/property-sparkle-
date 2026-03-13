import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, User, Clock, Send } from "lucide-react";

const chats = [
  {
    id: 1,
    client: "Rajesh Kumar",
    property: "3BHK Villa, Pune",
    lastMessage: "Thank you for the detailed renovation suggestions!",
    time: "2 min ago",
    unread: 3,
    status: "Active"
  },
  {
    id: 2,
    client: "Priya Sharma",
    property: "2BHK Apartment, Bangalore",
    lastMessage: "When can we schedule the property inspection?",
    time: "1 hour ago",
    unread: 1,
    status: "Active"
  },
  {
    id: 3,
    client: "Amit Patel",
    property: "4BHK Duplex, Hyderabad",
    lastMessage: "The renovation plan looks great. Let's proceed.",
    time: "3 hours ago",
    unread: 0,
    status: "Active"
  },
  {
    id: 4,
    client: "Sneha Iyer",
    property: "Commercial Space, Delhi",
    lastMessage: "Can you provide more details on commercial property valuations?",
    time: "1 day ago",
    unread: 0,
    status: "Archived"
  },
];

const ConsultantChat = () => {
  return (
    <DashboardLayout role="consultant">
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-2xl font-bold">Client Communications</h1>
          <p className="text-sm text-muted-foreground mt-1">Chat with clients and provide consultation support</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Chat List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Conversations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {chats.map((chat) => (
                  <div key={chat.id} className="p-3 rounded-lg border cursor-pointer hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <User size={14} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{chat.client}</p>
                          <p className="text-xs text-muted-foreground">{chat.property.split(',')[0]}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={chat.status === "Active" ? "default" : "secondary"} className="text-xs">
                          {chat.status}
                        </Badge>
                        {chat.unread > 0 && (
                          <div className="w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center mt-1">
                            {chat.unread}
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-1">{chat.lastMessage}</p>
                    <p className="text-xs text-muted-foreground">{chat.time}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Chat Window */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User size={16} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-lg">Rajesh Kumar</CardTitle>
                    <p className="text-sm text-muted-foreground">3BHK Villa, Pune</p>
                  </div>
                  <Badge variant="default" className="ml-auto">Active</Badge>
                </div>
              </CardHeader>

              <CardContent className="flex-1 p-4 space-y-4 overflow-y-auto">
                {/* Sample Messages */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <User size={14} />
                  </div>
                  <div className="bg-muted p-3 rounded-lg max-w-[70%]">
                    <p className="text-sm">Hi, I need consultation for renovating my villa. Can you help me with the property valuation first?</p>
                    <p className="text-xs text-muted-foreground mt-1">10:30 AM</p>
                  </div>
                </div>

                <div className="flex gap-3 justify-end">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[70%]">
                    <p className="text-sm">Hello Rajesh! I'd be happy to help with your property valuation. Could you please share some details about your villa - location, size, current condition, and any recent renovations?</p>
                    <p className="text-xs opacity-70 mt-1">10:35 AM</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-primary-foreground">D</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <User size={14} />
                  </div>
                  <div className="bg-muted p-3 rounded-lg max-w-[70%]">
                    <p className="text-sm">Sure, it's a 3BHK villa in Koregaon Park, about 1800 sq ft. Built 5 years ago, needs some modernization.</p>
                    <p className="text-xs text-muted-foreground mt-1">10:40 AM</p>
                  </div>
                </div>

                <div className="flex gap-3 justify-end">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[70%]">
                    <p className="text-sm">Thank you for the details. Based on current market rates in Koregaon Park, your villa could be valued around ₹1.8-2.2 crores. I can provide a detailed valuation report after inspecting the property. Would you like to schedule an inspection?</p>
                    <p className="text-xs opacity-70 mt-1">10:45 AM</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-primary-foreground">D</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <User size={14} />
                  </div>
                  <div className="bg-muted p-3 rounded-lg max-w-[70%]">
                    <p className="text-sm">That sounds good. The renovation suggestions you provided earlier were very detailed. Thank you!</p>
                    <p className="text-xs text-muted-foreground mt-1">10:50 AM</p>
                  </div>
                </div>
              </CardContent>

              {/* Message Input */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button size="sm">
                    <Send size={14} />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {chats.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">No conversations yet</h3>
            <p className="text-muted-foreground">Client conversations will appear here once they reach out for consultations.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ConsultantChat;