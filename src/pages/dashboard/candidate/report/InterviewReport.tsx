import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, ChevronDown, Download, FileText } from 'lucide-react';
import { cn } from "@/lib/utils"; // Add this import for the cn utility
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

interface InterviewReportProps {
    // Define props here
}

const InterviewReport: React.FC<InterviewReportProps> = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };

    const data = [
        {
            "name": "Jan",
            "sales": 4000,
            "orders": 2400,
        },
        {
            "name": "Feb",
            "sales": 3000,
            "orders": 1398,
        },
        {
            "name": "Mar",
            "sales": 2000,
            "orders": 9800,
        },
        {
            "name": "Apr",
            "sales": 2780,
            "orders": 3908,
        },
        {
            "name": "May",
            "sales": 1890,
            "orders": 4800,
        },
        {
            "name": "Jun",
            "sales": 2390,
            "orders": 3800,
        },
        {
            "name": "Jul",
            "sales": 3490,
            "orders": 4300,
        },
        {
            "name": "Aug",
            "sales": 4000,
            "orders": 2400,
        },
        {
            "name": "Sep",
            "sales": 3000,
            "orders": 1398,
        },
        {
            "name": "Oct",
            "sales": 2000,
            "orders": 9800,
        },
        {
            "name": "Nov",
            "sales": 2780,
            "orders": 3908,
        },
        {
            "name": "Dec",
            "sales": 1890,
            "orders": 4800,
        }
    ];

    const transactions = [
        {
            id: "invoice_01",
            amount: 2300,
            status: "success",
            date: "2023-01-01",
        },
        {
            id: "invoice_02",
            amount: 1400,
            status: "success",
            date: "2023-01-15",
        },
        {
            id: "invoice_03",
            amount: 3400,
            status: "pending",
            date: "2023-02-01",
        },
        {
            id: "invoice_04",
            amount: 500,
            status: "declined",
            date: "2023-02-15",
        },
        {
            id: "invoice_05",
            amount: 8000,
            status: "success",
            date: "2023-03-01",
        },
    ];

    return (
        <div className="w-full">
            <Card>
                <CardHeader>
                    <CardTitle>Interview Report</CardTitle>
                    <CardDescription>
                        Here is a summary of the interview performance.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Overall Score</CardTitle>
                                <CardDescription>Average score from all interviews</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">8.5</div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Total Interviews</CardTitle>
                                <CardDescription>Number of interviews conducted</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">25</div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Positive Feedback</CardTitle>
                                <CardDescription>Percentage of positive feedback received</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">75%</div>
                            </CardContent>
                        </Card>
                    </div>

                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                Interview Performance Metrics
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Communication Skills</CardTitle>
                                            <CardDescription>Average score for communication skills</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Progress value={70} />
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Technical Proficiency</CardTitle>
                                            <CardDescription>Average score for technical proficiency</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Progress value={80} />
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Problem Solving</CardTitle>
                                            <CardDescription>Average score for problem-solving abilities</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Progress value={90} />
                                        </CardContent>
                                    </Card>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">Recent Transactions</h2>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="ml-auto">
                                    <BarChart className="mr-2 h-4 w-4" />
                                    Filters
                                    <ChevronDown className="ml-2 h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-[200px]">
                                <DropdownMenuLabel>Filters</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>All</DropdownMenuItem>
                                <DropdownMenuItem>Success</DropdownMenuItem>
                                <DropdownMenuItem>Pending</DropdownMenuItem>
                                <DropdownMenuItem>Declined</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="relative w-full overflow-auto">
                        <Table>
                            <TableCaption>A list of your recent transactions.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Invoice</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Date</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {transactions.map((transaction) => (
                                    <TableRow key={transaction.id}>
                                        <TableCell className="font-medium">{transaction.id}</TableCell>
                                        <TableCell>{transaction.amount}</TableCell>
                                        <TableCell>
                                            <Badge className={cn(
                                                transaction.status === 'success' ? 'bg-green-500' :
                                                    transaction.status === 'pending' ? 'bg-yellow-500 text-black' :
                                                        'bg-red-500'
                                            )}>
                                                {transaction.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>{transaction.date}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                    <Button variant="ghost">
                        <FileText className="mr-2 h-4 w-4" />
                        Generate Report
                    </Button>
                    <Button>
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default InterviewReport;
