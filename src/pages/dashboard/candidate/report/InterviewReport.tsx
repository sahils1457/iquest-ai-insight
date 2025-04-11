
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { 
  ArrowLeft,
  Download,
  FileText,
  BarChart3,
  Video,
  PlayCircle,
  PauseCircle,
  Volume2,
  VolumeX,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Share2
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

const performanceData = [
  { name: 'Content', score: 85 },
  { name: 'Delivery', score: 72 },
  { name: 'Body Language', score: 65 },
  { name: 'Technical Accuracy', score: 90 },
  { name: 'Confidence', score: 78 },
];

const radarData = [
  {
    category: 'Communication',
    value: 80,
  },
  {
    category: 'Technical Knowledge',
    value: 90,
  },
  {
    category: 'Problem Solving',
    value: 85,
  },
  {
    category: 'Cultural Fit',
    value: 70,
  },
  {
    category: 'Leadership',
    value: 65,
  },
];

const questionsData = [
  {
    id: 1,
    question: "Describe a challenging project you've worked on and how you overcame obstacles.",
    strengths: "Good structure, relevant examples, clear communication",
    improvements: "Could elaborate more on specific technical challenges faced",
    score: 85
  },
  {
    id: 2,
    question: "How do you approach debugging a complex issue in your code?",
    strengths: "Systematic approach, good technical knowledge, mentioned collaboration",
    improvements: "Consider mentioning specific debugging tools you're familiar with",
    score: 78
  },
  {
    id: 3,
    question: "Explain how you would design a scalable web application.",
    strengths: "Good understanding of architecture principles, mentioned relevant technologies",
    improvements: "Could provide more specifics on database design considerations",
    score: 92
  },
  {
    id: 4,
    question: "Tell me about a time you had to learn a new technology quickly.",
    strengths: "Shows adaptability, gave concrete example of learning process",
    improvements: "Response was slightly verbose, could be more concise",
    score: 80
  },
];

const InterviewReport: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { id } = useParams<{ id: string }>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  const handleDownloadPDF = () => {
    toast({
      title: "Report Downloaded",
      description: "Your interview report has been downloaded as PDF.",
    });
  };
  
  const handleShareReport = () => {
    toast({
      title: "Report Shared",
      description: "A shareable link has been copied to your clipboard.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard/candidate/reports")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h2 className="text-2xl font-bold">Interview Performance Report</h2>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleShareReport}>
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownloadPDF}>
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Performance Summary</CardTitle>
            <CardDescription>
              Software Engineer Interview - April 11, 2025
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-iqblue">82%</div>
                    <p className="text-sm text-muted-foreground mt-1">Overall Score</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600">90%</div>
                    <p className="text-sm text-muted-foreground mt-1">Technical Knowledge</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-600">75%</div>
                    <p className="text-sm text-muted-foreground mt-1">Communication</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600">80%</div>
                    <p className="text-sm text-muted-foreground mt-1">Problem Solving</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Performance Breakdown</CardTitle>
            <CardDescription>
              Detailed analysis of your interview performance
            </CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="score" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Skills Assessment</CardTitle>
            <CardDescription>
              Your competencies across key areas
            </CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart outerRadius={90} data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="category" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name="Skills" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Interview Playback</CardTitle>
            <CardDescription>
              Review your interview responses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md overflow-hidden bg-black aspect-video relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Video className="h-16 w-16 text-white opacity-30" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/10" onClick={() => setIsPlaying(!isPlaying)}>
                  {isPlaying ? <PauseCircle className="h-6 w-6" /> : <PlayCircle className="h-6 w-6" />}
                </Button>
                <div className="h-1 flex-1 bg-white/20 rounded-full">
                  <div className="h-1 w-1/3 bg-white rounded-full"></div>
                </div>
                <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/10" onClick={() => setIsMuted(!isMuted)}>
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Question Analysis</CardTitle>
            <CardDescription>
              Detailed feedback for each question
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Question</TableHead>
                  <TableHead>Strengths</TableHead>
                  <TableHead>Areas for Improvement</TableHead>
                  <TableHead className="text-right">Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {questionsData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.question}</TableCell>
                    <TableCell>{item.strengths}</TableCell>
                    <TableCell>{item.improvements}</TableCell>
                    <TableCell className="text-right">
                      <span className={cn(
                        "px-2 py-1 rounded text-xs font-medium",
                        item.score >= 90 ? "bg-green-100 text-green-700" :
                        item.score >= 80 ? "bg-blue-100 text-blue-700" :
                        item.score >= 70 ? "bg-amber-100 text-amber-700" :
                        "bg-red-100 text-red-700"
                      )}>
                        {item.score}%
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>AI Recommendations</CardTitle>
            <CardDescription>
              Personalized suggestions to improve your interview performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MessageSquare className="h-5 w-5 text-iqblue mt-0.5" />
                <div>
                  <h4 className="font-medium">Improve Answer Structure</h4>
                  <p className="text-sm text-muted-foreground">
                    Practice using the STAR method (Situation, Task, Action, Result) for behavioral questions to provide more structured and comprehensive answers.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <MessageSquare className="h-5 w-5 text-iqblue mt-0.5" />
                <div>
                  <h4 className="font-medium">Enhance Technical Explanations</h4>
                  <p className="text-sm text-muted-foreground">
                    When discussing technical concepts, try to balance depth with clarity. Use analogies to explain complex ideas and always connect technical details to business value.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <MessageSquare className="h-5 w-5 text-iqblue mt-0.5" />
                <div>
                  <h4 className="font-medium">Body Language Awareness</h4>
                  <p className="text-sm text-muted-foreground">
                    Work on maintaining more consistent eye contact with the camera and reduce fidgeting. Consider practicing with video recordings to become more aware of your non-verbal communication.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <MessageSquare className="h-5 w-5 text-iqblue mt-0.5" />
                <div>
                  <h4 className="font-medium">Pace Your Responses</h4>
                  <p className="text-sm text-muted-foreground">
                    Some of your answers were rushed. Take a moment to gather your thoughts before responding, and aim for a conversational pace that allows your ideas to be fully understood.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <div className="text-sm text-muted-foreground">
              Was this feedback helpful?
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <ThumbsDown className="h-4 w-4 mr-2" />
                No
              </Button>
              <Button variant="outline" size="sm">
                <ThumbsUp className="h-4 w-4 mr-2" />
                Yes
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default InterviewReport;
