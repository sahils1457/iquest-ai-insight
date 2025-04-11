
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { 
  Video, 
  Users, 
  CheckCircle2,
  ArrowRight 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface InterviewTypeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedType: "one-way" | "live" | null;
}

const InterviewTypeDialog: React.FC<InterviewTypeDialogProps> = ({ 
  open, 
  onOpenChange,
  selectedType 
}) => {
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedType === "one-way") {
      navigate("/dashboard/candidate/book-interview/one-way");
    } else if (selectedType === "live") {
      navigate("/dashboard/candidate/book-interview/live");
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Choose Interview Type</DialogTitle>
          <DialogDescription>
            Select the type of interview that best suits your needs
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <Button
            variant={selectedType === "one-way" ? "default" : "outline"}
            className="justify-start h-auto p-4"
            onClick={() => onOpenChange(true)}
          >
            <div className="flex items-start gap-3">
              <Video className="h-5 w-5 text-iqblue mt-1" />
              <div className="text-left">
                <div className="font-medium">One-Way Interview</div>
                <p className="text-sm text-muted-foreground">
                  Record your responses to pre-set questions at your own pace
                </p>
              </div>
              {selectedType === "one-way" && (
                <CheckCircle2 className="h-5 w-5 text-green-500 ml-auto" />
              )}
            </div>
          </Button>
          
          <Button
            variant={selectedType === "live" ? "default" : "outline"}
            className="justify-start h-auto p-4"
            onClick={() => onOpenChange(true)}
          >
            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-iqblue mt-1" />
              <div className="text-left">
                <div className="font-medium">Live Interview</div>
                <p className="text-sm text-muted-foreground">
                  Practice with AI interviewer or book with an expert
                </p>
              </div>
              {selectedType === "live" && (
                <CheckCircle2 className="h-5 w-5 text-green-500 ml-auto" />
              )}
            </div>
          </Button>
        </div>
        
        <div className="flex justify-end mt-4">
          <Button onClick={handleContinue} disabled={!selectedType}>
            Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InterviewTypeDialog;
